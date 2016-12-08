import React from 'react';

export default class Card_04_08 extends React.Component {
    constructor(props){
        super(props);
        console.log("constructor");
    }
    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (<div className="ui card">
                  <div className="content">
                      number: {this.props.number}
                  </div>
               </div>)
    }
}
