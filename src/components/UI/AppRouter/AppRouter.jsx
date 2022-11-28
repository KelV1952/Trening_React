import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import Error from '../../../pages/Errors';
import PostIdPage from '../../../pages/PostIdPage';
import { privatRoutes, publicRoutes } from '../../../API/router';
import { AuthContext } from '../../../context';

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Switch>
      {privatRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}

      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
