(ns ducts.location
  ;; server resource to generate db location data from a zipcode
  (:require [db-connection :as dbc]))

(defn generate-location-data [zip-code]
  "query to generate location alias and insert into DB"
  (let [] zip-code))

(defn authenticate-location [zip]
  "given a location, determine if the location is valid"
  (let [loc-row (dbc/get-location zip)] ;; TODO: need location queries
    (if-not loc-row
      (authenticate-location (generate-location-data zip))
      loc-row)))
