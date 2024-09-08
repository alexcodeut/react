
import { createBrowserRouter } from "react-router-dom";
import New from '@/page/new'
import Layout from '@/page/layout'
import Year from '@/page/year'
import Month from '@/page/month'

const router =  createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                path:'/year',
                element: <Year/>  
            },
            {
                index: true,
                element: <Month/>  
            }
        ]
    },
    {
        path:'/new',
        element: <New/>
    },
])

export default router