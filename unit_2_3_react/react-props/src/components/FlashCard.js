import React, { Component } from 'react'

export default class FlashCard extends Component {
    render() {
        return (
            <>
                <div onClick={this.props.click} id='card'>
                    <h1>this is the flash card file </h1>
                    <h1>{this.props.superman}</h1>
                </div>
            </>
        )
    }
}
