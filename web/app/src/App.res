%%raw(`import './App.css';`)
//@module("./cubeViz2-gen/bootstrap") external bootstrap: unit => unit = "bootstrap"
open ValueChanger

@react.component
let make = () => {
  <div className="App"> <ValueChanger /> </div>
}