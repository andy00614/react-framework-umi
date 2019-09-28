import React from 'react'
import styles from './menu.scss'
import router from 'umi/router';

function Menu({menuList}) {
  let [targetKey,setTargetKey] = React.useState('home')
  /* 数据结构为
  [{
    key: String,
    value: String，
    child:[]
  }]
  */
  const setRouter = (key) => {
    router.push(`/${key}`)
  }
  return(
    <ul className={styles.menuContainer}>
      {
        menuList.map(menu => {
          return (
            <li 
              className={menu.key === targetKey ? styles.targetSelect : null} 
              key={menu.key} 
              onClick={() => {
                // 选中 && 路由跳转
                setTargetKey(menu.key)
                setRouter(menu.key)
              }}
            >
              {menu.title}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Menu