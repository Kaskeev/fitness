import React, { Component } from 'react'
import styles from "../Input/Input.css"



export default class input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="input" name="name" min="0" placeholder={this.props.name} {...this.props}  value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        );
      }
    }