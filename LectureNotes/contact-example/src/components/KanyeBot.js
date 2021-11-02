import React, { Component } from 'react'

export default class KanyeBot extends Component {
    render() {
        return (
            <div>
                <h1>I'ma Let You Finish but...{this.props.message}</h1>
            </div>
        )
    }
}
