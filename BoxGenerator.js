import React, { Component } from 'react'
import SingleBox from "./SingleBox";
import InputsField from "./InputsField";


export default class BoxGenerator extends Component {

    state = { boxes: [] };

    remove(id) {
        this.setState({
          boxes: this.state.boxes.filter(box => box.id !== id)
        });
      } 

    createBox = (newBox) => {
        this.setState({
          boxes: [...this.state.boxes, newBox]
        });
      }


    render() {
        
        const boxes = this.state.boxes.map(box => (
              
                <SingleBox
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height ={box.height}
                    color={box.color}
                    removeBox={() => this.remove(box.id)}
                />
                
                ));
        
        return (
            <div>
                 <h1>Color Box Maker Thingy</h1>
                <InputsField
                                create={this.createBox}
                />
                  {boxes}
            </div>
        );
    }
}
