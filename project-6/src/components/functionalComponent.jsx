import React, {useState} from "react";

const FunctionalComponent = ({name, age, company, setName}) => {

const [count, setCount] = useState(0);
const [changeName, setChangeName] = useState("")

// const {name, age, company, setName} = props;

    return(
        <div>
            <p>This is another functional component</p>
            <button onClick={() => setCount(count+1)}>click on me to increment by +1</button>
            <button onClick={() => setCount(count-1)}>click on me to decrement by -1</button>
            <h1>{count}</h1>
            <h1>My name is {name} I'm {age} and I work for {company}</h1>
            {/* <input type="text" onChange={(e)=> console.log(e.target.value)}/> */}
            <input type="text" onChange={(e)=> setChangeName(e.target.value)}/>
            <button onClick = {()=>setName(changeName)}>change name to input context </button>
        </div>
    )
}


export default FunctionalComponent;