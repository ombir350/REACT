
// const element = React.createElement('h1',{id:'title'},"Hello Coders");

// const element2 = React.createElement('div',null, 
//     React.createElement('h1',null,"Hello"), 
//     React.createElement('h2',null,"hi"));


// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Coders</h1> --> React.createElement('h1',{id:'title'},"Hello Coders") --> {type:"h1", props:{id:"title", children:"Hello Coders"}} --> <h1 id="title">Hello Coders</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coders");

// const element = <h1 id="title" className="first">Hello Coders</h1>;
// console.log(element);


// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>hi</h2>
// </div>);

// React.createElement('div',null,
//     React.createElement("h1",null,"Hello Coders"),
//     React.createElement("h2",null,"Kaise ho")
// )



// React Element
// const element3 = (<div>
//     <h1>Hello Coders</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// React Component

// function App(name){

//     return (
//         <h1>Hello Coders {10+20}</h1>
//     );
// }



// const a = App("Rohit");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coders {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

// React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// ,React.createElement("ul",null,<li>CSS</li>)])

// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Coders</h1>

function App(props){
    
    return (
        <h1>Hello Coders {props.name} {props.age}</h1>
    )
}

{
    name:"Rohit",
    age:30
}

React.createElement("h1")
const element = <App  name="Rohit" age={30}></App>


const root = ReactDOM.createRoot(document.getElementById('root'));

// App()
// <App/>