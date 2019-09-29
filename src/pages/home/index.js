import React from 'react'
import MD5 from 'md5.js'
import { Input, Pagination } from 'antd'
import styles from './home.scss'
import { get } from '../../common/api/fetch' // TODO: 请求方法比较常用，目录应该越清晰越好

const { Search } = Input
const OPENID = '1482924088'
const SECRET = '54330bef513070bac0acfc74f3791d6c'
const PAGESIZE = 96

function SearchImg() {
  let [inputValue,setInputValue] = React.useState('')
  let [searchResult,setSearchResult] = React.useState(null)
  let [pageNumber,setPageNumber] = React.useState(1)

  // timestamp: number : 是时间毫秒(new Date().getTime())
  const generateSignId = (timestamp) => {
    return `${OPENID}#${SECRET}#${timestamp}`
  }

  const fetchImg = (requestURL) => {
    // TODO: 抽离到单独的一个请求js文件里?
    fetch(requestURL).then(res => {
      return res.json()
    }).then(data => {
      setSearchResult(data)
    })
  }

  const requestImg = (inputValue,page=0) => {
    // signId = openid#secret#timestamp
    const timestamp = new Date().getTime()
    const signId = new MD5().update(generateSignId(timestamp)).digest('hex')
    // modal: search | hot
    const modal = inputValue ? 'search' : 'hot'
    const requestURL = `/api/${modal}?openid=${OPENID}&timestamp=${timestamp}&sign=${signId}&keyword=${inputValue}&offset=${page*PAGESIZE}&limit=${PAGESIZE}`
       
    fetchImg(requestURL)
  }

  const pageChange = (current,size) => {
    setPageNumber(current)
    requestImg(inputValue,current-1)
  }

  const imageLists = (searchResult && searchResult.data) || []
  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.title}>搜图</h1>
      <section>
        <div className={styles.searchBox}>
          <Search 
            onSearch={value => {
              requestImg(value)
              setInputValue(value)}
            }
          />
        </div>
      </section>
      <section className={styles.searchResult}>
        {
          imageLists.map(item => {
            return (
              <img key={item.id} src={item.thumb.gif} alt={item.id}/>
            )
          })
        }
      </section>
      <section className={styles.pagination}>
        {Object.keys(imageLists).length > 0 && <Pagination 
          current={pageNumber}
          pageSize={PAGESIZE}
          total={(searchResult && searchResult.pagination && searchResult.pagination.totalCount) || 0}
          onChange={pageChange}
        />}
      </section>
    </div>
  )
}
export default SearchImg