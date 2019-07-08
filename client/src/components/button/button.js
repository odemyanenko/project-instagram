import React, {Component} from 'react';


export default class Button extends Component {
    state = {
        textValue: 'Подписаться',
        buttonStyle:{
            color: 'black'
        }
    }
    update=()=>{
        this.setState({
            textValue: "Отписаться",
            buttonStyle:{
                color:'red'
            }
        })
    }

    render() {
        return <button onClick={this.update}
        style={this.state.buttonStyle}
        >{this.state.textValue}</button>
    }
}