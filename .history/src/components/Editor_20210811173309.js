import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2-react-17";

function Editor(props) {
  const { language, displayName, value, cnChange } = props;

  function handleChange(editor, data, value) {
    onchange(value);
  }

  return (
    <>
      <div className="editor-container">
        <div className="editor-title">
          {displayName}
          <button>o/c</button>
        </div>
      </div>
    </>
  );
}

export default Editor;
