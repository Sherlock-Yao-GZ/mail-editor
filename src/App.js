import Editor from './package';
import './App.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        let editor = new Editor('#app', {
            placeholder: '请填写'
        });
        console.log(editor);
    }, [])

    return (
        <div id="app"></div>
    );
}

export default App;
