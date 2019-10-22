import React, { useEffect, useCallback } from 'react'
import { Input, Icon, Button, message } from 'antd'
import styles from './login.scss'
import router from 'umi/router';
import moment from 'moment'
import { USERINFO } from '../../config/user'

function Login() {

  const handleLogin = useCallback(() => {
    // 拿到账号密码信息去做校验，如果校验没问题，刷新时间数据
    const { username, password } = userInfo
    const { name:trueName, password:truePassword } = USERINFO
    if(username === trueName && password === truePassword) {
      setLocalStrage(userInfo)
      router.push('/index/search')
    } else {
      message.error('请输入正确的账号密码')
    }    
  })

  useEffect(() => {
    window.addEventListener('keyup',(e) => {
      const { which:key } = e
      if(key === 13) {
        handleLogin()
      }
    })
  },[handleLogin])

  const userInfo = {
    username: '',
    password: ''
  }

  const setLocalStrage = (userInfo) => {
    const expireTime = moment().add(USERINFO.expireTime[0], USERINFO.expireTime[1]);  
    localStorage.setItem('username', userInfo.username)
    localStorage.setItem('password', userInfo.password)
    localStorage.setItem('expireTime',expireTime)
  }


  return(
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>登录</h2>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
          className={styles.antInput}
          onChange={(e) => {
            userInfo.username = e.target.value
          }}
        />
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
          className={styles.antInput}
          onChange={(e) => {
            userInfo.password = e.target.value
          }}
        />
        <Button type="primary" style={{width:'100%'}} onClick={handleLogin}>登录</Button>
      </div>
    </div>
  )
} 

export default Login