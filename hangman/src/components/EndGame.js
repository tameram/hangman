import React, { Component } from 'react';

class EndGame extends Component{
     refreshPage = ()=>{
        window.location.reload();
     }
    render() {
        return (
            <div>
                {this.props.ifUserWin?<div>Congratulations</div>:<div>LOSS</div>}
                <button onClick={this.refreshPage}>Play again</button>
            </div>

        )
    }
}

export default EndGame