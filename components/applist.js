import React from 'react';

export class ToDoAppList extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(elem) {
    var value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }


  render() {
    var items = this.props.tasks.map((elem, i) => {
      return <li className="list-group-item" key={i}>
             <span className="taskItem">{elem}</span>
             <button className="taskBtnRemove glyphicon glyphicon-remove" onClick={this.remove}></button>
             </li>
    });
    return (
      <div>
      <div className="label label-primary">List of tasks</div>
      <ul className="list-group">
        {items}
      </ul>
      </div>
    );
  }
}
