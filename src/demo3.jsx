import React from "react";

export default class Demo3 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        // console.log(e);
        console.log(e.target.value);
        let value = e.target.value;
        this.setState((prevState, props) => {
            console.log(prevState.name)
            return { name: value };
        });
    }

    render() {
        let { name } = this.state;
        return <div>
            <input type='text' defaultValue={10} value={name} onChange={this.inputChange} />

        </div >;
    }
}