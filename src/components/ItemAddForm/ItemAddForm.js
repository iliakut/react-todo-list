import React, {Component} from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    console.log(e.target.value);
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
  };

  render() {
    return (
      <form
        id="item-add-form"
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="New ToDo item"
        />
        <button
          type="submit"
          form="item-add-form"
          className="btn btn-secondary"
        >Add item
        </button>
      </form>
    )
  }
}
