function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Ombir"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "You are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thansk for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
       <Header name="Ombir"></Header>
       <Main user={{name:"Ombir",age:30,city:"Greate Noida"}}></Main>
       <Footer />
       </>
    )
}
root.render(<App/>);