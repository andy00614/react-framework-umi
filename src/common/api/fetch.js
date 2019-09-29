import { message } from 'antd'

function request(url,config) {
  return fetch(url,config).then(res => {
    if(!res.ok) {
      throw Error('respon is wrong!')
    }
    return res.json()
  }).catch(e => {
    message.error(e)
  })
}

export function get(url) {
  return request(url, {method:'GET' })
}

export function post(url,body) {
  return request(url,{
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
}