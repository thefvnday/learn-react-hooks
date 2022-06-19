import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        counter: 0,
        foodies: ['Mie Ayam', 'Nasi Liwet']
    }
    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    minusCounter = ()=>{
        this.state ({
            counter: this.state.counter -1
        })
    }

    addFoodies =()=>{
        setFoodies([...foodies, 'Kwitiau'])
    }

    render() {
        return (
            <div>ClassComponent</div>
        )
    }
}
