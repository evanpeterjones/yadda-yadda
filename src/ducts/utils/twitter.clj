(ns ducts.utils.twitter
  (:use [twttr.api :as api]
        [twttr.auth :refer [env->UserCredentials]]))

(def creds (read-string (slurp "src/ducts/utils/cred.edn")))

(comment
  (defn create-credentials [[consumer-key consumer-secret user-token user-token-secret]]
    (twttr.auth.UserCredentials consumer-key consumer-secret user-token user-token-secret))

  (api/users-show creds :params {:screen_name "jack"}))


