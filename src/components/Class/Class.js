import "./Class.css";

function Class(props){ //props let us pass data values b/w components
    return (
        <div className="class">
            {props.name}
        </div>
    )
}
//class is a reserve keyword in React

export default Class;