import React, { useEffect, useCallback } from 'react'
import styles from './index.scss';
import Header from './Header/header'
import {StoreContext} from 'redux-react-hook';
import { makeStore } from '../store/store'
import Redirect from 'umi/redirect'

const store = makeStore()

function BasicLayout(props) {
  console.log('BasicLayout')
  return (
    <StoreContext.Provider value={store}>
      <div className={styles.normal}>
        <Header></Header>
        <br/>
        <content>
          {props.children}
        </content>
      </div>
    </StoreContext.Provider>
  );
}

export default BasicLayout;
