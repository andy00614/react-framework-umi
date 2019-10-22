import React,{useState} from 'react'
import styles from './preview.scss'
import testImg from '../../assets/yay.jpg'
import { Input, Radio, Select } from 'antd'

/**
 * @param image String 预览图的base64地址
 * @param info object 展示对象，包括名字/分类/标签等
 */

const { Option } = Select;

function Preview() {

  const ratioArr = ['A','B','C','D']
  const isOnlineArr = ['是','否']
  
  const [ratioState,setRatioState] = useState(ratioArr[0])
  const [isOnlineValue,setIsOnlineValue] = useState(isOnlineArr[0])
  
  const isOnlineOnchange = (e) => {
    setIsOnlineValue(e.target.value) 
  }

  const onChange = (e) => {
    setRatioState(e.target.value)
  }

  const tagsChange = (value) => {
    console.log(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.skin}>
        <img src={testImg}/>
      </div>
      <div className={styles.info}>
        {/* // todo:可以把它封装成组件 */}
        <div className={styles.infoblock}>
          <div className={styles.title}>名字：</div>
          <div className={styles.type}><Input /></div>
        </div>

        <div className={styles.infoblock}>
          <div className={styles.title}>分类：</div>
          <div className={styles.classifier}>
            <Radio.Group onChange={onChange} value={ratioState}>
              {
                ratioArr.map(item => <Radio key={item} value={item}>{item}</Radio>)
              }
            </Radio.Group>
          </div>
        </div>

        <div className={styles.infoblock}>
          <div className={styles.title}>标签：</div>
          <div className={styles.tags}>
            <Select mode="tags" style={{ minWidth: '15vw' }} onChange={tagsChange} tokenSeparators={[',']}>
              {/* {children} */}
            </Select>
          </div>
        </div>

        <div className={styles.infoblock}>
          <div className={styles.title}>是否上线：</div>
          <div className={styles.isOnline}>
            <Radio.Group onChange={isOnlineOnchange} value={isOnlineValue}>
              {
                isOnlineArr.map(item => <Radio key={item} value={item}>{item}</Radio>)
              }
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Preview