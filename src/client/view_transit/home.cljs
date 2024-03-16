(ns view-transit.home
  (:require [cognitect.transit :as transit]
            [clojure.pprint :as pp]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [reagent.ratom :as ratom]))

(def edn (r/atom nil))

(defn reset-edn []
  (let [reader (transit/reader :json)
        out (->> (. (js/document.getElementById "transit") -value)
                 (transit/read reader))]
    (reset! edn out)))

(defn home []
  [:<>
   [:h1 "Read transit"]
   [:p "E.g"]
   [:p (transit/write (transit/writer :json) {:foo "bar"
                                                 :baz true
                                                 :why true
                                                 :fooey {:a false
                                                         :b "lorem ipsum"}
                                                 :universal-answer 42})]
   [:form
    [:label {:for "transit"} "Transit:"]
    [:br]
    [:input {:type "text" :id "transit" :name "transit"}]
    [:input {:type "submit" :value "Read":on-click (fn [e] (.preventDefault e) (reset-edn))}]]
   (when @edn [:pre (with-out-str (pp/pprint @edn))])])


(defn ^:dev/after-load init []
  (rdom/render [home] (js/document.getElementById "root")))
