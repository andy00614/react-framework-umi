import React,{ useEffect, useState } from 'react'
import { Tabs, Button } from 'antd';
import styles from './picture.scss'
import Preview from '../../components/preview/preview'
import { sortSkinInDifferent } from '../../common/skinSort'
import ShowPage from './showPage/showPage'
import { get } from '../../common/api/fetch'

const { TabPane } = Tabs;

function Picture(props) {
  const [skinInFlag,setSkinInFlag] = useState({1:[],2:[]})
  // 根据什么种类(type)进行皮肤分类 -> {typeA:[],typeB:[]}

  useEffect(() => {
    get('/skin/allskin').then(res => {
      setSkinInFlag(sortSkinInDifferent(res.skin_list,'flag'))
    })
  },[])

  const tabChange = (value) => {
    console.log(value)
  }
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tab}>
          {/* tabs首次加载只会渲染第一页,切换到第二页加载第二页下面的内容，再次操作将不会refresh组件 */}
          <Tabs defaultActiveKey="1" onChange={tabChange}>
            <TabPane tab="上线" key="1">
              <ShowPage content='content1' list={skinInFlag[1]}/>
            </TabPane>
            <TabPane tab="下线" key="2">
              <ShowPage content='content2' list={skinInFlag[2]}/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export default Picture