import React, { Component } from 'react';
// {letter}
class Letter extends Component{

    selectLetter = () =>{
        this.props.selectLetter(this.props.letter)
    }
    render() {
        return (<span onClick ={this.selectLetter} className={this.props.status}>
            {this.props.letter} 
        </span>)
    }
}

export default Letter