import React from 'react'
import MD5 from 'md5.js'
import { Input, Button } from 'antd'
import styles from './home.scss'
import { get } from '../../common/api/fetch' // TODO: 请求方法比较常用，目录应该越清晰越好

const { Search } = Input
const OPENID = '1482924088'
const SECRET = '54330bef513070bac0acfc74f3791d6c'

function SearchImg() {
  // let [inputValue,setInputValue] = React.useState('')
  let [searchResult,setSearchResult] = React.useState(null)
  // timestamp: number : 是时间毫秒(new Date().getTime())
  const generateSignId = (timestamp) => {
    return `${OPENID}#${SECRET}#${timestamp}`
  }
  const searchImg = (inputValue) => {
    // signId = openid#secret#timestamp
    const timestamp = new Date().getTime()
    const signId = new MD5().update(generateSignId(timestamp)).digest('hex')
    console.log(signId)
    const requestURL = `/api/search?openid=${OPENID}&timestamp=${timestamp}&sign=${signId}&keyword=${inputValue}`
    console.log(requestURL)
    // TODO: 抽离到单独的一个请求js文件里?
    fetch(requestURL).then(res => {
      return res.json()
    }).then(data => {
      setSearchResult(data)
      console.log(data)
    })
    // get(requestURL).then(res => {
    //   console.log(res)
    // })
  }
  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.title}>搜图</h1>
      <section>
        <div className={styles.searchBox}>
          <Search 
            onSearch={value => searchImg(value)}
          />
          {/* <Input value={inputValue} onChange={({target:{value}}) => setInputValue(value)}/>
          <Button 
            type="primary" 
            className={styles.searchButton}
            onClick={searchImg}
          >搜索</Button> */}
        </div>
      </section>
      <section className={styles.searchResult}>
        {
          searchResult && 
          searchResult.data &&
          searchResult.data.map(item => {
            return (
              <img key={item.id} src={item.thumb.gif} alt={item.id}/>
            )
          })
        }
      </section>
    </div>
  )
}
export default SearchImg