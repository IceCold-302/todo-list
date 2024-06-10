import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryAddTodo } from '../store/actions';
class AddTodo extends Component {
  constructor(props){
    super(props);
    this.input = React.createRef();
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp(event){
    if (event.charCode === 13){
      this.submitTodo();
    }
  }
  submitTodo = () => {
      this.props.tryAddTodo({
        name: this.input.current.value, 
        done: false
      })
      this.input.current.value =' ';
  }
  render() {
    return (
      <div className="d-flex mb-4">
      <input ref={this.input} type="text" onKeyPress={this.onKeyUp} className="form-control mr-5" />
      <button className="btn btn-success" onClick={this.submitTodo} > Ajouter </button>
    </div>
    )
  }
}
export default connect(null, {tryAddTodo})(AddTodo)
