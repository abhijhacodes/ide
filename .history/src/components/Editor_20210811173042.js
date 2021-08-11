import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

function Editor(props) {
  const { language, displayName, value, cnChange } = props;

  function handleChange(editor, data, value) {
    onchange(value);
  }
  return (
    <>
      <div></div>
    </>
  );
}

export default Editor;
