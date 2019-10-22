import React from 'react'
import styles from './menu.scss'
import router from 'umi/router';

  /* 数据结构为
  [{
    key: String,
    value: String，
    child:[] 之后如果有下拉层级可以用
  }]
  */

function Menu({menuList}) {
  let [targetKey,setTargetKey] = React.useState('search')
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