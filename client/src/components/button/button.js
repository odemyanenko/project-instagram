import React, {Component} from 'react';


export default class Button extends Component {
    state = {
        textValue: 'Подписаться'
    }
    update=()=>{
        this.setState({
            textValue: "Отписаться"
        })
    }

    render() {
        return <button onClick={this.update}>{this.state.textValue}</button>
    }
}