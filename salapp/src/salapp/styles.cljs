(ns salapp.styles
  (:require [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle style
  (at-keyframes "slide"
                [:from {:left "100%"}]
                [:to   {:left "-50%"}])
  [".reserva"    {:position "relative" :animation (str "10s infinite linear " (:slide style))}]
  [".contenedor" {:flex 1 :display "flex" :flex-direction "column"}]
  [".sala"       {:flex 1 :display "flex" :align-items "center"}])

