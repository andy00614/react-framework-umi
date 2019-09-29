import React from 'react'
import Menu from '../../components/menu' // TODO: 这里设置成alias
import styles from "./user.scss";
import { headerMenu as menuList } from '../../config/headerMenu'

function Header() {
  return (
    <div className={styles.header}>
      <Menu menuList={menuList}/>
    </div>
  )
}

export default Header