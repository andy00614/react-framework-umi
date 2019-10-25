import React, { useEffect, useCallback } from 'react'
import styles from './index.scss';
import Header from './Header/header'
import SideBar from './SideBar/sideBar'
import {StoreContext} from 'redux-react-hook';
import { makeStore } from '../store/store'
import Redirect from 'umi/redirect'

const store = makeStore()

function BasicLayout(props) {
  console.log('BasicLayout')
  const isHomePage = props.location.pathname === '/'
  return (
    <StoreContext.Provider value={store}>
      <div className={styles.normal}>
        {/* <Header></Header> */}
        <SideBar />        
        <content className={styles.content}>
          <div className={styles.header}>
            <div className={styles.user}>
              username
            </div>
          </div>
          <div className={styles.innerContent}>
            {props.children}
          </div>
        </content>
      </div>
      {isHomePage && <Redirect to="/search"/>}
    </StoreContext.Provider>
  );
}

export default BasicLayout;
