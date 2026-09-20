import React from "react";
import ReactDOM from "react-dom/client";


const element = <h1>Hello Coders</h1>

// React.createELement("h1",null,"Hello Coders")
// React.createELement(null,"h1","Hello COders");


ReactDOM.createRoot(document.getElementById('root')).render(element);