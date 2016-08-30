import React from 'react';

export default class ContactDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditable: false,
      name: '',
      phone: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  //...Update 버튼을 클릭할 때 input 태그에 연락처 정보를 담게 함.
  handleToggle(){
    if(!this.state.isEditable){
      this.setState({
        name: this.props.zcontact.name,
        phone: this.props.zcontact.phone
      });
    }else{
      this.handleUpdate();//...'OK'버튼을 클릭하면 데이터 업데이트됨.
    }

    //...setState() 가 비동기 메서드이므로,
    //...console.log(this.state.isEditable) 가 setState() 실행이 완료되기 전에
    //...먼저 실행되어서 this.state.isEditable 이 바뀐 값이 아닌 바뀌기 전의 값으로
    //...출력이 됨.
    this.setState({
      isEditable: !this.state.isEditable
    });
    //...콘솔을 사용하려면 Contact 컴포넌트의 handleChange 이벤트의
    //...e.target.value 속성값을 사용해서 표현하거나
    //...console.log(!this.state.isEditable); 처럼 표현해야 함.
    console.log(this.state.isEditable);
  }

  //...input 태그에 입력을 받게 함.
  //...input 태그의 onChange 이벤트를 처리하는 메서드.
  handleChange(e){
    if(!this.state.isEditable){
      this.setState({
        name: this.props.zcontact.name,
        phone: this.props.zcontact.phone
      });
    }

    let nextState = {};
    nextState[e.target.name] = e.target.value;
    /*...만약 phone 값을 수정할 경우 아래와 같이 만들어짐.
    { phone: 'sample_value'  }
    */
    this.setState(nextState);
  }

  //...state를 그대로 전달하므로 파라미터가 필요없음.
  handleUpdate(){
    this.props.onUpdate(this.state.name, this.state.phone);
  }

  render(){
    const zdetails = (
            <div>
              <p>{this.props.zcontact.name}</p>
              <p>{this.props.zcontact.phone}</p>
            </div>);

    const zedit = (
                    <div>
                      <p>
                        <input type="text"
                               name="name"
                               placeholder="name"
                               value={this.state.name}
                               onChange={this.handleChange}/>
                      </p>
                      <p>
                        <input type="text"
                               name="phone"
                               placeholder="phone"
                               value={this.state.phone}
                               onChange={this.handleChange}/>
                      </p>
                    </div>
                  );
    {/*zview의 위치는 zedit와 zdetails를 담기 위해 아래에 있어야 함.*/}
    const zview = this.state.isEditable ? zedit : zdetails;

    const zblank = (<div>Not Selected</div>);

    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected? zview: zblank} {/*…zdetail에서 zview로 변경함.*/}
        <button onClick={this.handleToggle}>
          {this.state.isEditable ? 'OK' : 'Update'}
        </button>
         {/*버튼을 클릭할 때 onRemove props 를 실행하게 함.*/}
        <button onClick={this.props.onRemove}>Delete</button>
      </div>
    );
  }
}
//...선택되지 않을때 기본 값이 필요함.
ContactDetails.defaultProps = {
  zcontact: {
    name: '',
    phone: ''
  },
  //...onRemove 라는 기본 props 를 지정함.
  onRemove: ()=>{console.error('onRemove not defined');},
  onUpdate: ()=>{console.error('onUpdate not defined');}
};

ContactDetails.propTypes = {
  zcontact: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func
}
