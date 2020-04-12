import React, {Component} from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {

  onLabelChange = () => {

  };

  render() {
    const {onAddItem} = this.props;

    return (
      <form className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="New ToDo item"
        />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onAddItem('test')}
        >Add item
        </button>
      </form>
    )
  }
}
