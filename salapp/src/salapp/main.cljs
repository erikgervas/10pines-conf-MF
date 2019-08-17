(ns salapp.main
  (:require [reagent.core :as r]
            [salapp.styles :refer [style]]
            [salapp.salas :refer [salas]]))

(defn reserva [una-reserva]
  [:div {:style {:flex 20}}
    [:small {:class-name (:reserva style)} una-reserva]])

(defn nombre-de-sala [una-sala]
  [:div {:style {:z-index 1 :background-color (:color una-sala)}}
   [:strong (str (:nombre una-sala) ": ")]])

(defn sala [una-sala]
  [:div {:style {:background-color (:color una-sala)}
         :class-name (:sala style)}
   [nombre-de-sala una-sala]
   [reserva (:reserva una-sala)]])

(defn ^:export salapp []
  (r/as-component
   [:div {:class-name (:contenedor style)}
     (for [una-sala salas]
       ^{:key (:nombre una-sala)} [sala una-sala])]))
