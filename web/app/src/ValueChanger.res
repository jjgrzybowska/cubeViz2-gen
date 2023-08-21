open Reducer
open ActionTypes

module ValueChanger = {
  @react.component
  let make = () => {
    let (state, dispatch) = React.useReducer(reducer, {value1: 0.0, value2: 0.0, value3: 0.0})
    let handleChangeAlpha = evt => {
      let newValue = float_of_string(ReactEvent.Form.target(evt)["value"])
      dispatch(ChangeAlpha(newValue))
    }

    let handleChangeBeta = evt => {
      let newValue = float_of_string(ReactEvent.Form.target(evt)["value"])
      dispatch(ChangeBeta(newValue))
    }

    let handleChangeGamma = evt => {
      let newValue = float_of_string(ReactEvent.Form.target(evt)["value"])
      dispatch(ChangeGamma(newValue))
    }
    Js.log(state)
    <div>
      <div>
        {React.string("Alpha:" ++ Belt.Float.toString(state.value1))}
        <input
          type_="range"
          min="0.0"
          max="1.0"
          step=0.01
          value={Js.Float.toString(state.value1)}
          onChange=handleChangeAlpha
        />
      </div>
      <div>
        {React.string("Beta:" ++ Belt.Float.toString(state.value2))}
        <input
          type_="range"
          min="0"
          max="1"
          step=0.01
          value={Js.Float.toString(state.value2)}
          onChange=handleChangeBeta
        />
      </div>
      <div>
        {React.string("Gamma:" ++ Belt.Float.toString(state.value3))}
        <input
          type_="range"
          min="0"
          max="1"
          step=0.01
          value={Js.Float.toString(state.value3)}
          onChange=handleChangeGamma
        />
      </div>
    </div>
  }
}