import React, {Component} from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
  id = 1;

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Have a lunch'),
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.id++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = todoData.filter(el => el.id !== id);

      return {
        todoData: newTodoData
      }
    })
  };

  addItem = (text) => {
    this.setState(({todoData}) => {

      const newTodoData = [...todoData, this.createTodoItem(text)];

      return {
        todoData: newTodoData
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];

      const newTodoItem = newTodoData.find((item) => item.id === id);
      newTodoItem.important = !newTodoItem.important;

      return {
        todoData: newTodoData
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];

      const newTodoItem = newTodoData.find((item) => item.id === id);
      newTodoItem.done = !newTodoItem.done;

      return {
        todoData: newTodoData
      }
    })
  };

  render() {
    const {todoData} = this.state;

   return (
     <div className="todo-app">
       <AppHeader toDo={1} done={3}/>
       <div className="top-panel d-flex">
         <SearchPanel/>
         <ItemStatusFilter/>
       </div>

       <TodoList
         todos={todoData}
         onDeleted={this.deleteItem}
         onToggleImportant={this.onToggleImportant}
         onToggleDone={this.onToggleDone}
       />
       <ItemAddForm
         onAddItem={this.addItem}
       />
     </div>
   );
  }
};
