import React, { useEffect, useCallback } from 'react'
import moment from 'moment'
import router from 'umi/router';
import { message } from 'antd'
import styles from './index.scss';
import Header from './Header/header'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header></Header>
      <br/>
      <content>
        {props.children}
      </content>
    </div>
  );
}

export default BasicLayout;
