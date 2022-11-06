import React from 'react';
import { createRoot } from 'react-dom/client';

const App = ()=> {
    return <div>Hello there</div>
}

createRoot(<App />, document.querySelector('#root'))