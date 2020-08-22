(ns script-scraper
  (:require [net.cgrand.enlive-html :as html])
  (:gen-class))

(defn query-items [url]
  (loop [items (-> url
                   parse-html
                   (html/select [:li.result-row :p.result-info [#{:time.result-date :a.result-title}]]))
         parsed []]
    (if (empty? items)
      parsed
      (recur (-> items rest rest)
             (conj parsed {:time (first items)
                           :title (second items)})))))



;;; OLD CODE DELETE LATER, KEEP FOR REFERENCE
(defn parse-html [url]
  (html/html-resource (java.net.URL. url)))

(defn get-movies-from-genre-page [genre-url]
  (for [url (-> genre-url
                parse-html
                (html/select [:body :td :p :a]))]
    (-> url :attrs :title)))

(defn remove-punctuation [script-string]
  (clojure.string/replace script-string #"[^A-Za-z0-9_]" " "))

(defn reduce-white-space [script-string]
  (clojure.string/replace script-string #"  |\n" ""))

(defn parse-script-from-movie-page [movie-url]
  (reduce #(str %1 %2)
          (for [line (-> movie-url
                         parse-html
                         (html/select [:body :pre])
                         first
                         :content)]
            (if (string? line)
              (-> line
                  reduce-white-space
                  remove-punctuation) 
              ""))))
