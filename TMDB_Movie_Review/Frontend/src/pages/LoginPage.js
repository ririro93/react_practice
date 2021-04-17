import { useState } from 'react';
import Cookies from 'js-cookie';

// this function is defined outside of LoginPage to prevent it from being defined on every LoginPage render
const requestLogin = async (loginInfo) => {
  const csrftoken = Cookies.get('csrftoken');
  const infoWithToken = {
    ...loginInfo,
    csrfmiddlewaretoken: csrftoken
  };

  console.log(infoWithToken);
  const res = await fetch('http://localhost:8000/api-auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'X-CSRFToken': csrftoken
    },
    credentials: 'include',
    body: JSON.stringify(infoWithToken)
  });

  const data = await res.json();
  console.log('data:', data);
  return data;
}

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await requestLogin(loginInfo);

    console.log(data);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={loginInfo.username} onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" value={loginInfo.password} onChange={handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default LoginPage
