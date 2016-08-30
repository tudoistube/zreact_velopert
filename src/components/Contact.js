import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import upate from 'react-addons-update';

export default class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state={
      zselectedKey: -1,
      zkeyword: '',

      contactData:[
        {name: 'Atom', phone: '010-0000-0001'},
        {name: 'Bread', phone: '010-0000-0002'},
        {name: 'Carrot', phone: '010-0000-0003'},
        {name: 'Donkey', phone: '010-0000-0004'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    console.log('a. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
    console.log('b. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
  }

  handleChange(e){
    this.setState({
      zkeyword: e.target.value
    });
  }

  handleClick(key){
    this.setState({
      zselectedKey: key
    });

    console.log(key, ' is selected');
  }

  handleCreate(contact){
    this.setState(
      contactData: update(this.state.contactData,
                          {$push: [contact]})
    );
  }
  handleRemove(){
    this.setState({
      contactData: update(this.state.contactData,
                           { $splice: [[this.stae.zselectedKey, 1]]}
                         ),
      zselectedKey: -1
    });
  }
  handleEdit(name, phone){
    this.setState({
      contactData: update(this.state.contactData,
      {
        [this.state.zselectedKey]: {
          name: {$set: name},
          phone: {$set: phone}
        }
      });
    });
  }

  render(){
    const mapToComponent=(data)=>{
      data.sort();
      data = data.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(this.state.zkeyword.toLowerCase())> -1;
        }
      );
      return data.map(
        (contact, i)=>{
          return(<ContactInfo contact={contact}
                              key={i}
                              onClick={()=>this.handleClick(i)} />);
        });
    };

    return(
      <div>
        <h1>Contacts List...</h1>
        <input name="zkeyword" placeholder="Search..."
            value={this.state.zkeyword}
            onChange={this.handleChange}/>
        <div>{mapToComponent(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.zselectedKey != -1}
          zcontact={this.state.contactData[this.state.zselectedKey]}/>

      </div>
    );
  }
};
