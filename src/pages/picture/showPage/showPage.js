import { Button } from 'antd'
import styles from './showPage.scss'
import { sortSkinInDifferent } from '../../../common/skinSort'
import SkinShow from '../skinShow/skinShow'

function ShowPage({list}) {
  const sortedInCategory = sortSkinInDifferent(list,'category')
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Button className={styles.uploadButton}>上传新皮肤</Button>
        <div className={styles.content}>
          {
            Object.keys(sortedInCategory).map(key => {
              const data = sortedInCategory[key]
              return <SkinShow key={key} title={key} data={data}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default ShowPage