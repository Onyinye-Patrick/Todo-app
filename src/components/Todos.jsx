import {FaTimes} from "react-icons/fa"
const Todos = (props) =>{
    return(
        <div className="todos">
            <input type="checkbox" />
            <p>{props.todoList}</p>
            <FaTimes onClick={()=>props.onDelete(props.id)} style={{color: "red", fontSize: "12px", position: "fixed", left:"220px"}}/>
           

        </div>
    )
}


export default Todos