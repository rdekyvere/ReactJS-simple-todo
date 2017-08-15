import React from 'react';

export class AddNewTask extends React.Component {
  constructor() {
    super();
    this.justSubmitted = this.justSubmitted.bind(this);
  }

  justSubmitted(event) {
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    if (value) {
      this.props.updateList(value);
      input.value = '';
    }

  }

  render() {
    return (
      <form onSubmit={this.justSubmitted}>
        <label>Enter a task</label>
        <input type="text" />
      </form>
    );
  }
}
