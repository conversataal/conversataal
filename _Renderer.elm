
module Renderer where
import Html exposing (Html)
import Native.Renderer

import Index
import Blog.Index

render : Html -> String
render = Native.Renderer.toHtml


port index : String
port index =
    Index.view
        |> render


port blogindex : String
port blogindex =
    Blog.Index.view
        |> render

