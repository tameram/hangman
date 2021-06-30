import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        return (<div>
            <div>Available Letters</div>
            <div>{Object.keys(this.props.letterStatus).map(l => 
                                    <Letter key ={l}selectLetter = {this.props.selectLetter} status ={this.props.letterStatus[l].toString()} letter ={l}/>)}</div>
        </div>)
    }
}
export default Letters