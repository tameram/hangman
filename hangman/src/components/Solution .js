import React, { Component } from 'react';
import Letter from './Letter';


class Solution extends Component {
    render() {
        return (
            <div>
                {this.props.solution.word.split('').map(l => {
                    if (this.props.letterStatus[l]) {
                        return (<Letter  status='letter' letter={l} />)
                    } else {
                        return (<Letter  letter='_ ' />)
                    }
                })}
                <div><div>{this.props.solution.hint}</div></div>
            </div>
        )

    }
}
export default Solution