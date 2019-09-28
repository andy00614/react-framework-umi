import styles from './index.scss';
import Header from './Header/header'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header></Header>
      <content>
        {props.children}
      </content>
    </div>
  );
}

export default BasicLayout;
