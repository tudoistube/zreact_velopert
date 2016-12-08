import React from 'react';

export default class Button extends React.Component {
    render() {
        let className = "ui button " + this.props.customClass;

        return (
            <div onClick={this.props.onClick}className={className}>
              {this.props.caption}
            </div>

        )
    }
}
