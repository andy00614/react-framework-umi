import React from 'react'
import styles from './home.scss'
import MD5 from 'md5.js'
import { Input, Button } from 'antd'

const OPENID = '1482924088'
const SECRET = '54330bef513070bac0acfc74f3791d6c'

function SearchImg() {
  let [inputValue,setInputValue] = React.useState('')
  // timestamp: number : 是时间毫秒(new Date().getTime())
  const generateSignId = (timestamp) => {
    return `${OPENID}#${SECRET}#${timestamp}`
  }
  const searchImg = () => {
    // signId = openid#secret#timestamp
    const timestamp = new Date().getTime()
    const signId = new MD5().update(generateSignId(timestamp)).digest('hex')
    console.log(signId)
  }
  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.title}>搜图</h1>
      <section>
        <div className={styles.searchBox}>
          <Input value={inputValue} onChange={({target:{value}}) => setInputValue(value)}/>
          <Button 
            type="primary" 
            className={styles.searchButton}
            onClick={searchImg}
          >搜索</Button>
        </div>
      </section>
    </div>
  )
}
export default SearchImg