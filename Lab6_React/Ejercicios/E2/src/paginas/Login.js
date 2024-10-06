import React, { Component } from 'react';
import '../estilos/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    // por motivo de demostrar especificamente la experiencia de la practia, por simplicidad, asumiremos que el login siempre es exitoso.
    this.setState({ isLoggedIn: true });
    this.props.onLogin();
  };

  render() {
    return (
      <div className="loginContenedor">
        <form onSubmit={this.handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;