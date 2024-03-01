import { createHashRouter, Navigate } from 'react-router-dom';
import { globalConfig } from '@/globalConfig'
import Login from '@/pages/login';
import Home from '@/pages/home';
import My from '@/pages/My';
import Entry from '@/pages/entry/entry';
import QuickConsultation from '@/pages/quickConsultation'
import LoginUsername from '@/pages/login/loginUsername';
import LoginCheckPhone from '@/pages/login/loginCheckphone';
import Register from '@/pages/register';
import Step1 from '@/pages/register/step1/step1';
import Step2 from '@/pages/register/step2/step2';
import Step3 from '@/pages/register/step3/step3';
import Step2PerUser from '@/pages/register/step2/step2PerUser'
import ExpertList from '@/pages/expertsList';

// 全局路由
export const globalRouters = createHashRouter([
    {
        path: '/',
        element: <Entry />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
              path: '/my',
              element: <My></My>
            },
            {
                path: '/quick_consultation',
                element: <QuickConsultation></QuickConsultation>
            },
            {
                path: '/expert_list',
                element: <ExpertList></ExpertList>
            },
            {
                path: '/login',
                element: <Login />,
                children: [
                    {
                        path: '',
                        element: <LoginUsername></LoginUsername>
                    },
                    {
                        path: '/login/username',
                        element: <LoginUsername></LoginUsername>
                    },
                    {
                        path: '/login/checkphone',
                        element: <LoginCheckPhone></LoginCheckPhone>
                    },
                ]
            },
            {
                path: '/register',
                element: <Register></Register>,
                children: [
                    {
                        path: '',
                        element: <Step1></Step1>
                    },
                    {
                        path: '/register/step1',
                        element: <Step1></Step1>
                    },
                    {
                        path: '/register/step2',
                        element: <Step2></Step2>,
                        children: [
                            {
                                path: '/register/step2/peruser',
                                element: <Step2PerUser></Step2PerUser>
                            },

                        ]
                    },
                    {
                        path: '/register/step3',
                        element: <Step3></Step3>
                    },
                ]
            }
        ]
    },
    //未匹配
    // {
    //     path: '*',
    //     element: <Navigate to="/" />,
    // },
])

export function PrivateRoute(props) {
    // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
    return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
        props.children
    ) : (
        <Navigate to="/" />
    )
}
