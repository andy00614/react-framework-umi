export const sortSkinInDifferent = (skinList,type='category') => {
  const result = {}
  skinList.forEach(skin => {
    const category = skin[type]
    if(!result[category]) {
      result[category] = []
    }
    result[category].push(skin)
  })
  return result
}