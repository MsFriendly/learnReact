import React, {useState} from 'react'
// import Class from "../Class/Class";
import ClassGraphQL from "../Class/ClassGraphQL"
import "./Home.css";

function Home(props){
    
    //setup state variables. updated when components rerendered 
    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    } //re-render comoponent

    const handleSubmit = (event) => {
        event.preventDefault();//default is make post request
        if (!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value));//update states
            setValue('');
        }
        // console.log(favoriteClasses);
    }
    return (
        <div>
            <h1>Learn React: Favorite Class organizer</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form>
            {/* <div className="my-classes"> 
                {favoriteClasses.map((favClass) => 
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div> */}
            <div className="my-classes"> 
                {favoriteClasses.map((favClass) => 
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </div>
    )
}

export default Home;