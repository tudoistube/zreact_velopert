import React from 'react';

export default class ContactInfo extends React.Component{
  render(){
    return(
      <div>
        Name : {this.props.contact.name} || Phone No. : {this.props.contact.phone}
      </div>
    );
  }
}
