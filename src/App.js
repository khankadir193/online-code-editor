import logo from './logo.svg';
import './App.css';
import CodeEditor from './EditorComponents/CodeEditor';
import { useState } from 'react';

function App() {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('');
  const [javascript, setJavaScript] = useState('');

  return (
    <div>
      <h3>HTML</h3>
      <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
    </div>
  );
}

export default App;
