import React from 'react';

export default class ContactCreate extends React.Component{
  //...생성자를 사용해서 state를 초기화함.
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    //...input태그 수정이 가능하게 연결해서 state를 사용하게 함.
    this.handleChange = this.handleChange.bind(this);
    //...클릭이벤트 바인딩.
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /*...수정할 state 가 하나인 경우 Contact 컴포넌트의 handleChange(e) 처럼 처리함.
  handleChange(e){
    this.setState({
      zkeyword: e.target.value
    });
  }
  ...수정할 state가 여러 개인 경우 빈 객체를 만듦.
  ...nextState[e.target.name] = e.target.value; 에서
  ...e.target.name 속성은 input 태그의 name 속성과 매칭되어 여러개의 input 태그를
  ...처리할 수 있음.
  */
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    /*...만약 phone 값을 수정할 경우 아래와 같이 만들어짐.
    { phone: 'sample_value'  }
    */
    this.setState(nextState);
  }

  //...Contact컴포넌트에서 onCreate시 이벤트의 props를 받아옴.
  handleClick(){
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };

    this.props.onCreate(contact);

    this.setState({
        name: '',
        phone: ''
    });
  }

  handleKeyPress(e) {
    if(e.charCode === 13){
      this.handleClick();
    }
  }

  render(){
    return(
      <div>
          <h2>Create Contact</h2>
          <p>
          <input type="text"
                 name="name"
                 placeholder="name"
                 value={this.state.name}
                 onChange={this.handleChange}/>
          <input type="text"
                 name="phone"
                 placeholder="phone"
                 value={this.state.phone}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress} />
          </p>
          <button onClick={this.handleClick}>
            Create Contact
          </button>
      </div>
    );
  }
}

//...Contact 컴포넌트에서 OnClick 이벤트시 props를 받아오는 것을 명시하기 위함.
//...선택사항이나 권장사항.
ContactCreate.propTypes = {
  onCreate: React.PropTypes.func,
  onKeyPress: React.PropTypes.func
};
ContactCreate.defaultProps = {
  onCreate: () => { console.error('onCreate not defined'); },
  onKeyPress: () => { console.error('onKeyPress not defined'); }
};
