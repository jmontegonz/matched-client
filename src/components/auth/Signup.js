import React from 'react'
import {Link} from 'react-router-dom'
import AuthService from './auth-service'

export default class Signup extends React.Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      goal: ''
    }

    this.service = new AuthService();
  }



  handleFormSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    const kind = this.state.goal.includes('talent') ? 'Company': 'Seeker';

    this.service.signup(email, password, kind)
    .then(response => {

      this.setState({
        email: '',
        password: '',
        goal: ''
      });

      this.props.setUser(response);
    
    })
    .catch(error => error);

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

    render(){
        return(
          <div>
              SIGNUP FORM   
            <form onSubmit={this.handleFormSubmit}>
              <label>Email:</label>
              <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
              
              <label>Password:</label>
              <input name="password" type="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

              <label>I want to...:</label>
              <select name='goal' onChange={ e => this.handleChange(e)}>
                <option>Land my dream job</option>
                <option>Hire the best talent in the world</option>
              </select>
              
              <input type="submit" value="Signup" />
            </form>
       
            <p>Already have account? 
                <Link to={"/login"}> Login</Link>
            </p>
       
          </div>
        )
      }
}