import React from 'react'
import { Button } from 'antd'
function PicMark() {
  const fetchData = () => {
    fetch('/picmarkDemo/image/getpicinfo')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <Button onClick={() => {
        fetchData()
      }}>request</Button>
    </div>
  )
}
export default PicMark