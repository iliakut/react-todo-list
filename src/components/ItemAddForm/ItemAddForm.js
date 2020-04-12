import React, {Component} from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {

  render() {
    const {onAddItem} = this.props;

    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onAddItem('test')}
        >Add item
        </button>
      </div>
    )
  }
}
