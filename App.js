import React from "react";
import ReactDOM from 'react-dom/client';
/* React.createElement */
// const heading = React.createElement('div',{id : 'parent'},[
//     React.createElement('h1',{},'I am h1 tag'),
//     React.createElement('h2',{},'I am h2 tag')
// ]);


// JSX
const Title= ()=> <h1>I am title</h1>
const JsxHeading = ()=> (
    <div>
        <h1>I am heading</h1>
<Title />
</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxHeading />);