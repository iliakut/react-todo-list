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
    ],
    filterData: [
      {label: 'All', activated: true},
      {label: 'Active', activated: false},
      {label: 'Done', activated: false},
    ],
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

  toggleProperty(arr, id, propName, key = 'id') {
    const newArr = [...arr];

    const newItem = newArr.find((item) => item[key] === id);
    newItem[propName] = !newItem[propName];

    return newArr;
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  onFilterClick = (label) => {
    this.setState(({filterData}) => {
      const newFilterData = [...filterData];
      newFilterData.forEach(item => {
        item.activated = item.label === label;
      });

      return {
        filterData: newFilterData
      }
    })
  };

  filterList(list, label) {
    switch (label) {
      case 'Done':
        return list.filter(item => item.done);
      case 'Active':
        return list.filter(item => !item.done);
      default:
        return list;
    }
  }

  render() {
    const {todoData, filterData} = this.state;
    const doneCount = todoData
      .filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    const activeFilter = filterData.find(item => item.activated);
    const filteredTodoData = this.filterList(todoData, activeFilter.label);

   return (
     <div className="todo-app">
       <AppHeader
         toDo={todoCount}
         done={doneCount}
       />
       <div className="top-panel d-flex">
         <SearchPanel/>
         <ItemStatusFilter
           filterData={filterData}
           onFilterClick={this.onFilterClick}
         />
       </div>

       <TodoList
         todos={filteredTodoData}
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
