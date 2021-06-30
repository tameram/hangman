import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (<div className={this.props.colorScore}>
            YOUR SCORE IS : {this.props.score}
        </div>)
    }
}
export default Score