import {
  createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Home/Menu/Menu';
import Order from '../pages/Order/Order';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../pages/Shared/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart';
import AllUsers from '../pages/Dashboard/AllUsers';
import AddItem from '../pages/Dashboard/AddItem';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItem',
        element: <AddItem></AddItem>
      }
    ]
  }
]);