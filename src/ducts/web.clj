(ns ducts.web
  (:use compojure.core
        ring.middleware.json
        ring.util.response
        [ring.adapter.jetty :as jetty])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [ducts.views :as views]
            [ducts.utils.cookies :as cku]
            [ducts.utils.location :as loc]
            [db-connection :as dbc])
  (:gen-class))

(declare request-obj)

(defroutes app
  (GET "/" request
       (def request-obj request)
       {:status 200
        :headers {"Content-Type" "text/html"}
        :cookies {"yapp-session" {:value (let [ses-id (cku/get-cookie-from-request request)]
                                           (if (dbc/session-exists? ses-id)
                                             ses-id
                                             (dbc/create-session)))
                                  :max-age (* 60 24 30 365)}}
        :body (views/web-app)})
  (GET "/feed" []
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body (.getValue (:json_agg (first (dbc/get-posts dbc/db-spec))))})
  (GET "/bounce" request
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body "adsf" })
  (GET "/getzip" [lat long :as req]
       "this route returns a zipcode when given lat and longitude"
       ;; TODO: ensure parameters are doubles
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body (let [data (loc/get-location-data lat long)]
                (dbc/associate-session-and-zip data (cku/get-cookie-from-request req))
                (loc/get-location-value data :zip))})

  ;; TODO: /feed overloading with pagination
  (route/resources "/")
  (route/not-found (views/not-found)))

(defn -main [& [port]]
  (dbc/checkup 1)
  (let [port (Integer. (or (System/getenv "PORT") port 5000))]
    (jetty/run-jetty (handler/site #'app) {:port port :join? false})))
