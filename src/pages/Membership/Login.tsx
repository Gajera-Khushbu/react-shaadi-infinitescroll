import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/authActions';
import { User } from '../../global/User';
import { login } from '../../services/authService';

function Login(props: any) {
  const [user, setUser] = useState<User>({
    userName: '',
    password: ''
  })

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevValues: any) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let obj = JSON.parse(JSON.stringify(user));
    delete obj.password
    const result = await props.login(obj);
    if (result) {
      props.history.push("/home");     
    }
  }

  const { userName, password } = user;
  return (
    <div className='wrapper d-flex justify-content-center align-items-center flex-column'>
      <div className='text-white h1'>
        Login
      </div>
      <div>

        <form onSubmit={onSubmit}>
          <label htmlFor='userName' className='text-white'>Username</label>
          <input className='form-control mb-3' id='userName' type={'text'} placeholder={'Enter username'} value={userName} name='userName' onChange={handleFormChange} required />

          <label htmlFor='password' className='text-white'>Password</label>
          <input className='form-control mb-3' type={'password'} id="password" placeholder={'Enter password'} value={password} name='password' onChange={handleFormChange} required />
          <button type='submit' className='btn btn-outline-light'>Login</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {
  setCurrentUser,
  login
})(Login);
