module Behaviour where

type Action = 
    Increment | Decrement

init: State
init = {count = 0}

update: Action -> State -> State
update action, state = 
   case action of 
    Increment -> {state | count <- state.count + 1 }
    Decrement -> {state | count <- state.count - 1 }

input: String -> Action
input action =
    case action of 
        "decrement" -> Decrement
        _ -> Increment

