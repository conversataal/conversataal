module Hello exposing (..)

import Html exposing (Html, div, text, program, header)
import Html.Attributes exposing (style)

add : Int -> Int -> Int
add x y =
  x + y

-- MODEL
type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "Hello", Cmd.none )


-- MESSAGES
type Msg
    = NoOp


-- VIEW
pageHeader : Html Msg
pageHeader =
    header
        [
        style
            [
                ("backgroundColor", "red")
            ]
        ]
        [ text "header" ]

{-
header
    contact-info tel.nr, mail, social media
    menu logo, links
a photo
3 blocks
-}
view : Model -> Html Msg
view model =
    div []
        [
        pageHeader
        , div
            []
            [ text ("Hello " ++ toString(add 1 3)) ]
        ]


-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


-- SUBSCRIPTIONS
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


-- MAIN
main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }