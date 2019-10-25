import styles from './skinShow.scss'


function SkinShow({title,data}) {
  console.log(title,data)
  return (
    <div className={styles.container}>
      <div className={styles.title}>{`${title}：`}</div>
      <div className={styles.imgBox}>
        {
          data.map(item => (
            <div className={styles.img}>
              <div className={styles.imgWrapper}>
                <img key={item.id} src={item.picture}/>
              </div>
              <div className={styles.imgName}>{item.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default SkinShow