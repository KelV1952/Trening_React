import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import React, { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <form onSubmit={login}>
        <h4>Страница для логина</h4>
        <MyInput type="text" placeholder="Введите логин" />

        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
export default Login;
