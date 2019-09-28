import React from 'react'
import Menu from '../../components/menu' // TODO: 这里设置成alias
import styles from "./user.scss";

function Header(props) {

  const menuList = [
    {
      key: 'home',
      title: '首页'
    },{
      key: 'document',
      title: '文档'
    },{
      key: 'blog',
      title: 'Blog'
    }
  ]
  return (
    <div className={styles.header}>
      <Menu menuList={menuList}/>
    </div>
  )
}

export default Header