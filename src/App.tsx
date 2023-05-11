import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
import { TsReactTest } from "./try-use-array";
import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      <ProjectListScreen></ProjectListScreen>
      <TsReactTest></TsReactTest>
    </div>
  );
}

export default App;
