import { Component } from "react";

class StateCounterClass extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
    }

    this.increment = this.increment.bind(this)
    }

    increment() {
        console.log(this)

        this.setState({
            counter: this.state.counter + 1
        })
    }
    render(){
        return (
            <div>
                <h4> i denna komponent använder vi setState i en klasskomponent och värder är: {this.state.counter}</h4>
                <button onClick={() => this.increment()}>öka värdet</button>
            </div>
        )
    }


}

export default StateCounterClass
