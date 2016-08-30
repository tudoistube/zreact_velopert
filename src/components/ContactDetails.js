import React from 'react';

export default class ContactDetails extends React.Component{
  render(){
    const zdetails = (
            <div>
              <p>{this.props.zcontact.name}</p>
              <p>{this.props.zcontact.phone}</p>
            </div>);
    const zblank = (<div>Not Selected</div>);

    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected? zdetails: zblank}
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
  onRemove: ()=>{console.error('onRemove not defined');}
};
