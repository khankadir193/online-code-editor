import logo from './logo.svg';
import './App.css';
import CodeEditor from './EditorComponents/CodeEditor';
import { useState } from 'react';
import PreviewContainer from './EditorComponents/PreviewContainer';

function App() {
  const [html, setHtml] = useState('<h1>Abdul Kadir Khan</h1>');
  const [css, setCss] = useState('body { background-color: lightblue; }');
  const [javascript, setJavaScript] = useState('console.log("Hello World");');
  const [activeTab, setActiveTab] = useState('html'); // Default active tab is 'html'
  // Combined HTML, CSS, and JavaScript for preview
  
  const renderEditor = () => {
    switch (activeTab) {
      case 'html':
        return <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
      case 'css':
        return <CodeEditor value={css} onChange={(value) => setCss(value)} language="css" />
      case 'js':
        return <CodeEditor value={javascript} onChange={(value) => setJavaScript(value)} language="javascript" />
      default:
        return <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
    }
  }

  return (
    <>
    <div className='tabs'>
        <button onClick={() => { setActiveTab('html') }}>HTML</button>
        <button onClick={() => { setActiveTab('css') }}>CSS</button>
        <button onClick={() => { setActiveTab('js') }}>JavaScript</button>
      </div>
    <div className='container'>
      <div className='code-editor-container'>
        {renderEditor()}
      </div>
     <PreviewContainer css={css} html={html} javascript={javascript} /> 
    </div></>
  );
}

export default App;
