import { Route, Redirect } from 'dva/router';
import moment from 'moment'

const AuthRouter = (props) => {
  const { route } = props;
  const { component:Component } = route;
  const canLogin = () => {
    const curTime = moment().valueOf()
    let expireTime = localStorage.getItem('expireTime');
    expireTime = moment(expireTime).valueOf()
    // 将现在的时间和之前存在localStorage中的时间对比，如果晚于那个时间，说明过期了，需要重新登录
    // if no expireTime in localStorage -> !expireTime
    return !(curTime > expireTime || !expireTime)
  }
  const isLogin = canLogin()
  return (
    //true ? <Route {...route} /> : <Redirect to="/login" />
    //这个也可以，跟下边的二选一，否则会报错 

    <Route render={ props => {
      return isLogin ? <Component { ...props } >{ props.children }</Component> : <Redirect to="/login" />
    }} />
  )
}

export default AuthRouter;