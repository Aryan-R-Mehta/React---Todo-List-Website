import React, {Component} from "react";

const Render_task = ({tasks,task_completed}) => {
    const task_list = tasks.map(i => {
        return(
            <div className="Render_task" key={i.id}>
                    <div class="d-flex align-items-center p-2 ">
                        <div class="p-2 w-100">{i.task}</div>
                        <button className="p-2 btn btn-danger" onClick={ () => {task_completed(i.id)}}>Completed</button>
                    </div>
                    

            </div> 
        )
    })

    return(
        <div>  
            {task_list}
        </div>
    )
    
}
export default Render_task