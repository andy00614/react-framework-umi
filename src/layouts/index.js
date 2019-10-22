import React, { useEffect } from 'react'
import moment from 'moment'
import router from 'umi/router';
import { message } from 'antd'
import styles from './index.scss';
import Header from './Header/header'

function BasicLayout(props) {
  useEffect(() => {
    console.log(11)
    const curTime = moment().valueOf()
    let expireTime = localStorage.getItem('expireTime');
    expireTime = moment(expireTime).valueOf()
    // 将现在的时间和之前存在localStorage中的时间对比，如果晚于那个时间，说明过期了，需要重新登录
    // if no expireTime in localStorage -> !expireTime
    if(curTime > expireTime || !expireTime) {
      message.warning('过期,请重新登录')
      router.push('/login')
    }
  },[])
  return (
    <div className={styles.normal}>
      <Header></Header>
      <br/>
      <content>
        {props.children}
      </content>
      {/* <Redirect to="/search" /> */}
    </div>
  );
}

export default BasicLayout;
