(ns ducts.utils.cookies
  (:require [clojure.string :as str]))

(defn get-cookie-map [cookie-string]
  "returns map from a cookie string from an HTTP Request"
  (if cookie-string
    (loop [rest-vec (map #(str/trim %) (str/split cookie-string #";"))
           cmap nil]
      (if (not-empty rest-vec)
        (let [cookie (first rest-vec)
              spl (str/split cookie #"=")]
          (recur (rest rest-vec) (assoc cmap (get spl 0) (get spl 1))))
        cmap))
    ""))

(defn get-cookie-from-request [request & ck]
  (get
   (get-cookie-map (get (:headers request) "cookie"))
   (or ck "yapp-session")))
