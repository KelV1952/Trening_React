import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <h4>Страница для логина</h4>
        <MyInput type="text" placeholder="Введите логин" />

        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
export default Login;
