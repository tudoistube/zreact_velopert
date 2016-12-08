import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

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
    this.handleUpdate = this.handleUpdate.bind(this);

    console.log('a. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
    console.log('b. react-hot 로듈모더는 constructor를 실행하지 않으므로 새로 고침해야 함');
  }

//...S.localStorage 사용해서 새로고침해도 Contact 데이터 유지하기.
  componentWillMount(){
    const contactData = localStorage.contactData;

    if(contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
        localStorage.contactData = JSON.stringify(this.state.contactData);
      }
  }
//...E.localStorage 사용해서 새로고침해도 Contact 데이터 유지하기.

  //...수정할 state 가 하나인 경우 handleChange(e) 와 같이 처리함.
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
    this.setState({
      contactData: update(this.state.contactData,
                    { $push: [contact] })
    });
  }

  handleRemove(){
    //...연락처를 선택하지 않고 삭제버튼 클릭만으로 삭제되는 것을 방지함.
    if(this.state.zselectedKey < 0){  return;  }
    var temp_selectedKey = this.state.zselectedKey;
    this.setState({
      contactData: update(this.state.contactData,
                           { $splice: [[this.state.zselectedKey, 1]]}
                         ),
      zselectedKey: -1
    });
    console.log(temp_selectedKey + ' was deleted...');
  }

  handleUpdate(name, phone){
		this.setState({
			contactData: update( this.state.contactData,
				{
					[this.state.zselectedKey]: {
						name: { $set: name },
						phone: { $set: phone }
					}
				}
			)
		});
    console.log(this.state.zselectedKey + "번 : " + name + " : " + phone + " update completed...");
	}

  render(){
    const mapToComponent=(data)=>{
      data.sort();
      data = data.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(this.state.zkeyword.toLowerCase())> -1;
        }
      );

      return data.map((contact, i) => {
          return(<ContactInfo contact={contact}
                              key={i}
                              onClick={() => this.handleClick(i)}/>);
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
          zcontact={this.state.contactData[this.state.zselectedKey]}
          //...onRemove 라는 props 에 this.handleRemove 라는 값을 전달함.
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
        <ContactCreate
          onCreate={this.handleCreate}/>
      </div>
    );
  }
};
