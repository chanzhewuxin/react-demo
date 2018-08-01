import React from "react";

export default class Demo3 extends React.Component {

    constructor(props) {
        this.state = {
            name: ''
        }
    }

    inputChange() {
        console.log(arguments);
        this.setState((prevState, props) => {
            return prevState;
        })
    }

    render() {
        let { name } = this.state;
        return <div>
            <input type='text' defaultValue={10} value={name} onChange={() => this.inputChange()} />
        </div>;
    }
}