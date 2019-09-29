import React from 'react'
import styles from './home.scss'
import { Input, Button } from 'antd'

function SearchImg() {
  let [inputValue,setInputValue] = React.useState('')
  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.title}>搜图</h1>
      <section>
        <div className={styles.searchBox}>
          <Input value={inputValue} onChange={({target:{value}}) => setInputValue(value)}/>
          <Button type="primary" className={styles.searchButton}>搜索</Button>
        </div>
      </section>
    </div>
  )
}
export default SearchImg