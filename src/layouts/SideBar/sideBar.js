import 'antd/dist/antd.css';
import { Menu, Icon, Button } from 'antd';
import {headerMenu} from '../../config/headerMenu'
import styles from './sideBar.scss'
import router from 'umi/router'

const { SubMenu } = Menu;

function SideBar() {
  const menuOnChange = ({key}) => {
    router.push(`/${key}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        输入法管理后台
      </div>
      <div className={styles.menuList}>
        <Menu
          defaultSelectedKeys={[headerMenu[0].key]}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onClick={menuOnChange}
          // inlineCollapsed={this.state.collapsed}
        >
          {headerMenu.map(item => {
            return(
              <Menu.Item key={item.key}>
                <span>{item.title}</span>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </div>
  )
}
export default SideBar