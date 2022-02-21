import "./Class.css";
import React, {useState, useEffect} from 'react';

function Class(props){ //props let us pass data values b/w components
    const [classInfo,  setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url + props.name);
            const data = await response.json();
            console.log(data);
            setClassInfo(data);
        }
        fetchData();
    }, [props.name])
    let info;
    if(classInfo.id){
        info = <div className="information">
            <p id="title"> {classInfo.title}</p>
            <p id="department"> {classInfo.department_name}</p>
            <p id="description"> {classInfo.description}</p>
        </div>
    } else if (classInfo.error){
        info = <p>Class Not Found</p>
    }
    else{
        info = <p>Loading...</p>
    }
    
    return (
        <div className="class">
            {props.name}
            <div>
                {info}
            </div>
        </div>
    )
}
//class is a reserve keyword in React

export default Class;