<<<<<<< HEAD
import React from "react";


export default class Welcome extends React.Component {

    contructor(props) {
        this.state = { name: 'a' }
    }
    // clickCallback() {
    //     this.setState((preState, props) => {
    //         console.log(preState);
    //         return preState+'11111'
    //     });
    // }

    // clickCallback=()=> {
    //     this.setState((preState, props) => {
    //         console.log(preState,props);
    //         return preState+'11111';
    //     });
    // }

    clickCallback() {
        this.setState((preState, props) => {
            console.log(preState);
            return preState + '11111'
        });
    }

    render() {
        return <h1>Hello,
            <button onClick={() => this.clickCallback()}>click</button>
 
        </h1>;
    }
=======
import React from "react";


export default class Welcome extends React.Component {

    contructor(props) {
        this.state = { name: 'a' }
    }
    // clickCallback() {
    //     this.setState((preState, props) => {
    //         console.log(preState);
    //         return preState+'11111'
    //     });
    // }

    // clickCallback=()=> {
    //     this.setState((preState, props) => {
    //         console.log(preState,props);
    //         return preState+'11111';
    //     });
    // }

    clickCallback() {
        this.setState((preState, props) => {
            console.log(preState);
            return preState + '11111'
        });
    }

    render() {
        return <h1>Hello,
            <button onClick={() => this.clickCallback()}>click</button>
        </h1>;
    }
>>>>>>> 08c5b4f8c82e224435beca7cb101893006832d5b
}