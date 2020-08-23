import React, { Component } from 'react';
import { ButtonToolbar, Dropdown, MenuItem, DropdownButton } from 'react-bootstrap';

export class Buttons extends Component {

    handleSelect = (event) => {
        this.props.gridSize(event)
    }

    render(){
        return (
          <div className="center">
            <ButtonToolbar>
              
              <button
                className="btn btn-default"
                onClick={this.props.playButton}
              >
                Play
              </button>
              <button
                className="btn btn-default"
                onClick={this.props.pauseButton}
              >
                Pause
              </button>
              <button className="btn btn-default" onClick={this.props.clear}>
                Clear
              </button>
              <button className="btn btn-default" onClick={this.props.slow}>
                Slow
              </button>
              <button className="btn btn-default" onClick={this.props.fast}>
                Fast
              </button>
              <button className="btn btn-default" onClick={this.props.seed}>
                Seed
              </button>
            </ButtonToolbar>
          </div>
        );
    }
}

class Box extends Component {

    selectBox = () => {

        this.props.selectBox(this.props.row, this.props.col)

    }
    
    render(){
        return (
            <div 
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            >    
            </div>
        )
    }
}

class Grid extends Component {
    render() {

        const width = (this.props.cols * 14);
        var rowsArr = []
        for(let i =0; i < this.props.rows; i++){
            for (let k=0; k < this.props.cols; k++){
                let boxId = i + "_" + k
                
                let boxClass = this.props.gridFull[i][k] ? "box on" : "box off"

                rowsArr.push(
                    <Box
                      boxClass={boxClass}
                      key={boxId}
                      boxId={boxId}
                      row={i}
                      col={k}
                      selectBox = { this.props.selectBox}
                    ></Box>
                );
            }
        }
        return (
            <div className="grid" style={{ width: width}}>
                {rowsArr}
            </div>
        );
    }
}


export default Grid;