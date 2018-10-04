import React from 'react'
import bunny from './bunny.svg'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showBunny: false
        }
        this.toggleBunny = this.toggleBunny.bind(this)
    }

    toggleBunny(event) {
        event.preventDefault()
        this.setState({
            showBunny: !this.state.showBunny
        })
    }

    render() {
        return <div>
            <h1>Welcome</h1>
            <h3>Push the button to display/hide the bunny</h3>
            <button type='button' onClick={this.toggleBunny}>Toggle bunny</button>
            <div>
                {this.state.showBunny && <img height='100' src={bunny} alt='bunny' />}
            </div>
        </div>
    }
}