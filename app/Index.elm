module Hello exposing (..)

import Html exposing (Html, div, text, program)

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
view : Model -> Html Msg
view model =
    div []
        [ text ("Hello " ++ toString(add 1 3)) ]


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