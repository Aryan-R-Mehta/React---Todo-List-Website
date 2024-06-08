import React, {Component} from "react";

class AddTask extends Component{
    state = {
        task: null,
    }
    task_content = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.task_added(this.state);
    }

    render(){
        return(
            <div className="AddTask">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 mt-3 form_area">
                        <input className="form-control" id="task" onChange={this.task_content} placeholder="Enter The task"/>
                    </div>
                    <button className="btn btn-primary mb-3">Add Task</button>
                </form>
            </div>
            
        )
    }
}

export default AddTask