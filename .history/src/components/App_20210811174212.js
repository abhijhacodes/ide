import {useState} from "react"
import Editor from "./Editor";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml"
          displayName="HTML"
          value={}
          onChange={}
        />
        <Editor 
          language="xml"
          displayName="HTML"
          value={}
          onChange={}
        />
        <Editor 
          language="xml"
          displayName="HTML"
          value={}
          onChange={}
        />
      </div>
      <div className="pane bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
