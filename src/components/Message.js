import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
        Message: 'Welcome to KLU'
        
    }
    }
    changeMessage(){
        this.setState({
            Message:'Thanks for visiting KLU,Visit Again'
        })
    }
render() {
    return (
    <div><h1> {this.state.Message}</h1>
    <button onClick={()=> this.changeMessage()}>Visit again</button>
    </div>
    )
    
}
}

export default Message