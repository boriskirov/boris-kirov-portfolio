import React from 'react';


class Time extends React.Component {

  state={

    curTime : new Date().toLocaleString(),

  }
  render(){
    return (
      <div className="Time">
        <p>{this.state.curTime}</p>
      </div>
    );

  }

}


export default Time;
