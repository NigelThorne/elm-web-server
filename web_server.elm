module WebServer where

--import Behaviour exposing (Action, init, update, input)
import Html exposing (text)
main = text "placeholder" -- hack
------------------------------
------------------------------


-- APP BEHAVIOUR -- 

type alias State = 
    { count : Int}

type Action = 
    Increment | Decrement

init: State
init = {count = 0}

update: Action -> State -> State
update action state = 
   case action of 
    Increment -> {state | count <- state.count + 1 }
    Decrement -> {state | count <- state.count - 1 }

input: String -> Action
input action =
    case action of 
        "decrement" -> Decrement
        _ -> Increment

view: State -> String
view state = 
    "The current count is: " ++ toString state.count
-- END APP 



------------------------------
------------------------------
------------------------------
-- Web stuff -- 
------------------------------

type alias Request = 
    { id: Int 
    , url: String
    , body: String
    , action: String
    }

type alias Response = 
    { id: Int 
    , url: String
    , body: String
    }

------------------------------

interpret: Request -> Action
interpret request = 
    input request.action

respond: Request -> State -> Response
respond request model =
    { id = request.id
    , url= request.url
    , body= view model
    }

-- all inputs come as requests
port messageIn : Signal Request

-- all outputs leave as responses.
port messageOut : Signal Response
port messageOut = 
    let inputs = messageIn
        actions = Signal.map interpret inputs
    in 
        Signal.map2 respond inputs (Signal.foldp update init actions)



