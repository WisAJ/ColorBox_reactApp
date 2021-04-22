import React, { Component } from 'react'
import { v1 as uuid } from "uuid";

export default class InputsField extends Component {

    state = {width: '', height: '', color: ''};



    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value,
         
        });
      }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuid() };
        // console.log(newBox),
        this.props.create(newBox);
        this.setState({
          height: "",
          width: "",
          color: ""
        });
    }

    render() {
        return (
            <form onSubmit={(evt)=>this.handleSubmit(evt)}>
              <div>
                <label htmlFor='height'>Height</label>
                <input
                  type='text'
                  name='height'
                  value={this.state.height}
                  onChange={(evt)=>this.handleChange(evt)}
                  id='height'
                />
              </div>
              <div>
                <label htmlFor='width'>Width</label>
                <input
                  type='text'
                  name='width'
                  value={this.state.width}
                  onChange={(evt)=>this.handleChange(evt)}
                  id='width'
                />
              </div>
              <div>
                <label htmlFor='color'>Color</label>
                <input
                  type='text'
                  name='color'
                  value={this.state.color}
                  onChange={(evt)=>this.handleChange(evt)}
                  id='color'
                />
              </div>
              <button>Add New Box!</button>
            </form>
          );
    }
}
