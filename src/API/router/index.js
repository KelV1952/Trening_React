import About from '../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from '../../pages/PostIdPage';
import React from 'react';
import Login from '../../pages/Login';

export const privatRoutes = [
  { path: '/posts', component: Posts, exact: true },
  { path: '/about', component: About, exact: true },
  { path: '/posts/:id', component: PostIdPage, exact: true },
];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
