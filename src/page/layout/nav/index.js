import React from 'react'
import {  TabBar } from 'antd-mobile'

import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
} from 'antd-mobile-icons'

const Nav =  ({onChangeTab}) => {
  const tabs = [
    {
      key: '/new',
      title: '首页',
      icon: <AppOutline />,
 
    },
    {
      key: '/year',
      title: '待办',
      icon: <UnorderedListOutline />,

    },
    {
      key: '/',
      title: '消息',
      icon:  <MessageFill />,
  
    },

  ]

  // const [activeKey, setActiveKey] = useState('todo')
  // const getPath = (path) => {
  //   onChangeTab(path)
  //   console.log(path)
  // }
  return (
    <>

        <TabBar  onChange={onChangeTab}>
          {tabs.map(item => (
            <TabBar.Item  key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>


      
    </>
  )
}

export default Nav