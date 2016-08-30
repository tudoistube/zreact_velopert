import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state={
      zkeyword: '',

      contactData:[
        {name: 'Atom', phone: '010-0000-0001'},
        {name: 'Bread', phone: '010-0000-0002'},
        {name: 'Carrot', phone: '010-0000-0003'},
        {name: 'Donkey', phone: '010-0000-0004'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    
    console.log('a. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
    console.log('b. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
  }

  handleChange(e){
    this.setState({
      zkeyword: e.target.value
    });
  }

  render(){
    const mapToComponent=(data)=>{
      return data.map(
        (contact, i)=>{
          return(<ContactInfo contact={contact} key={i} />);
        });
    };

    return(
      <div>
        <h1>Contacts List...</h1>
        <input name="zkeyword" placeholder="Search..."
            value={this.state.zkeyword}
            onChange={this.handleChange}/>
        <div>{mapToComponent(this.state.contactData)}</div>
      </div>
    );
  }
};
