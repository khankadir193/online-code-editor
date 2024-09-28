import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({language,value,onChange}) => {
  return (
    <MonacoEditor
     height='40vw'
     language={language}
     theme='vs-dark'
     value={value}
     onChange={(newValue)=>{onChange(newValue)}}
    //  width='85vw'
    />
  )
}

export default CodeEditor;