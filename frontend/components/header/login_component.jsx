import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

// const msp = ({ session, entities }) => {
//   return ({
//     currentUser: {email: "", password: ""}
//   });
// };

const mdp = (dispatch) => {

  return ({
    login: (formUser) => dispatch(login(formUser)),
  });
};



class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push('/'));
  }
  
  signupLink () {
    return (
      <div className='signup-link'><Link to='/signup'>Sign Up!</Link></div>
    );
  }

  render() {

    return (
      <header className='login-form'>
        <form className='login-form-box' onSubmit={this.handleSubmit}>
          <p className='p-h2 margin-lr'>Log in</p>
          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")} />

          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />

            <a href='modalplace'className='login-forgot-password margin-lr'>Forgot your password? MODAL</a>
            <input className='session-submit margin-lr' type="submit" value="Log me in!"/>
            <h5 className='login-remember-me margin-lr'>Remember me CHECKBOX</h5>
         
          <div className="divider margin-lr">
            <div className="line"></div>
            <div className="txt">or</div>
          </div>

          <div className="session-form-footer">New to Kicstarter? {this.signupLink()}</div>
        </form>
      </header>
    )

  }

}

export default connect(null, mdp)(LoginComponent);