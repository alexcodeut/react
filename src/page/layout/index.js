import  {Outlet, useNavigate} from 'react-router-dom'
import {Button} from 'antd-mobile'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBillList } from '@/store/modules/bill'
import FooterNav from './nav'
import './index.css'
const Layout = () =>{
    // const{ billList} = useSelector(state => state.bill) useSelector,
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const changePath = (path) => {
        console.log(path)
        navigate(path)
    }
    useEffect( ()=> {
        dispatch(fetchBillList())
    },[dispatch])
    return (
    <div>
    <Outlet></Outlet>

        这是首页
        <Button color='primary'>按钮</Button>
        <div className='footer'>
            <FooterNav onChangeTab={changePath}/>
        </div>
         </div>
    )
}
export default Layout