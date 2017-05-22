module Index where

import Users exposing (User, noah)
import Html exposing (..)
import Html.Attributes exposing (href)


viewWelcome : User -> Html
viewWelcome user =
    "Welcome to " ++ user.name ++ "'s page!"
        |> text

pageHeader : Html
pageHeader =
    header
        []
        [text "header"]

{-
header
    contact-info tel.nr, mail, social media
    menu logo, links

a photo
3 blocks
-}

htmlWrapper : Html -> Html
htmlWrapper content =
    body [] [
        pageHeader
        , content
        ]

pageContent : Html
pageContent =
    div
        []
        [text "hoi"]
--    div
--        []
--        [ a
--            [ href "blog/index.html" ]
--            [ text "Click me to go to the blog!"]
--        , text " This is an example index page "
--        , div [] [ viewWelcome noah ]
--        ]

view : Html
view =
    htmlWrapper pageContent

