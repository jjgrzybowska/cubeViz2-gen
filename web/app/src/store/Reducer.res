open ActionTypes

type state = {value1: float, value2: float, value3: float}

let initialState = {value1: 0.0, value2: 0.0, value3: 0.0}

let reducer = (state, action) =>
  switch action {
  | ChangeAlpha(newValue) => {...state, value1: newValue}
  | ChangeBeta(newValue) => {...state, value2: newValue}
  | ChangeGamma(newValue) => {...state, value3: newValue}
  }