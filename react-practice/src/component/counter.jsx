import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        tag: ['tag1','tag2','tag3']
    }
    render() { 
        return (  
            <React.Fragment>
                <span>{this.state.count}</span>
                <button>Increment</button>
                <ui>{this.state.tag.map(tag => (
                    <li>{tag}</li>
                ))}</ui>
            </React.Fragment>
        );
    }
}
 
export default Counter;