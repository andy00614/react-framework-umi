import styles from './picture.scss'
import Preview from '../../components/preview/preview'

function Picture(props) {
  const fileOnChange = () => {
    console.log(this)
  }
  return(
    <div className={styles.container}>
      <div className={styles.upload}>
        <Preview />
      </div>
    </div>
  )
}
export default Picture