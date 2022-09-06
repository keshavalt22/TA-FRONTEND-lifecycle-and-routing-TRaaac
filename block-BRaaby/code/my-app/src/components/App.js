import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope,faCalendarTimes, faMap, faPhone, faLock } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      key: "",
      text: "",
    }
  }

  refresh = () => {
    window.location.reload();
  }

  handleMouseMove = ({target}) => {
    let userInfo = this.state.data.results[0];
    let { id } = target;
    switch (id) {
      case"name":
      return this.setState({ value: userInfo.login.userInfo, key: id});
      case "email":
        return this.setState( { value: userInfo.email, key: id } );
      case "age":
        return this.setState( { value: userInfo.dob.age, key: id } );
      case "location":
        return this.setState({ value: userInfo.location.street.number + " " + userInfo.location.street.name, key: id } );
      case "phone":
        return this.setState( { value: this.formatPhoneNumber(userInfo.phone), key: id } );
      case "password":
        return this.setState( { value: userInfo.login.password, key: id } )
      default:
          break;
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => this.setState({data: data.results[0]}));
  }

  render(){
    let data = this.state.data;

    console.log(data);
    if(!data) {
      return<h1>Loading....</h1>
    }
    return(
      <div className='box'>
        <img src={data.picture.large} alt=""></img>
        <p>My {this.state.key} is</p>
        <h2>{data.name.first}</h2>
        <ul className ="nav">
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "name" icon={faUser}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "email" icon={faEnvelope}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "age" icon={faCalendarTimes}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "location" icon={faMap}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "phone" icon={faPhone}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon onMouseMove={this.handleMouseMove} id = "password" icon={faLock}></FontAwesomeIcon>
          </li>
        </ul>
        <button 
        onClick={this.refresh}
        className='btn'>{!data ? "Loading...." : "Random User"}</button>
      </div>
    )
  }
}

export default App;
