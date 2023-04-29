import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Terms from "../pages/shared/terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Category></Category>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
           
        {
            path: ':id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://dragon-news-server-hparvez307.vercel.app/categories/${params.id}`)
        }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element:<ProtectedRoute><News></News></ProtectedRoute> ,
                loader: ({params}) => fetch(`https://dragon-news-server-hparvez307.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;