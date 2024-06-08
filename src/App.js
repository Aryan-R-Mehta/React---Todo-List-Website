import React, {Component} from "react";
import Render_task from "./Render_task";
import AddTask from "./AddTask";

class App extends Component{
  state = {
    todo: [
      {id: 1, task: "Wake up at 9"},
      {id: 2, task: "Freshen up till 10"},
      {id: 3, task: "Study for 10 to 12"},
    ]
  }

  task_added = (task) => {
    task.id = Math.random();
    let add_task = [...this.state.todo, task]
    this.setState({
      todo: add_task
    }) 
  }

  task_completed = (id) => {
    let delete_data = this.state.todo.filter( i=> {
      return i.id !== id; 
    } ) 
    this.setState({
      todo: delete_data
    })
  }

  render(){
    return(
        <div className="App">
          <div className="card">
            <div className="card-header h1 text-center">
              Todo's list
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"> <Render_task task_completed={this.task_completed} tasks={this.state.todo}/> </li>
              <li className="list-group-item"> <AddTask task_added={this.task_added}/> </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default App;
