export const getTypes = (payload) => {
  const types = payload.map(item => item.itemType)
  const uniqueTypes = Array.from(new Set(types))
  return uniqueTypes.map(item => ({ slug: item, name: item }))
}
  
export const getTagsWithCount = (payload) => {
  const tags = payload.reduce((acc, curr) => {
    curr.tags.forEach(item => {
      if(acc.length){
        const existTagIndex = acc.findIndex(existItem => existItem.name === item)
        if (existTagIndex > -1) {
          acc[existTagIndex].count += 1
          return
        }
      }
      acc.push({ name: item, slug: item, count: 1 })
    })
    return acc
  }, []) 

  return [{name: "All", slug: "All"}, ...tags]
}

export const getManufacturersWithCount = (payload) => {
  const manufacturers = payload.reduce((acc, curr) => {
    if (acc.length) {
      const existTagIndex = acc.findIndex(({ slug }) => slug === curr.manufacturer)
      if (existTagIndex > -1) {
        acc[existTagIndex].count += 1
        return acc
      }
    }
    acc.push({ slug: curr.manufacturer, count: 1 })
    return acc
  }, [])

  return [{name: "All", slug: "All"}, ...manufacturers]
}

export const SORT_TYPES = {
  lowToHigh: (a, b) => a.price - b.price,
  highToLow: (a, b) => b.price - a.price,
  newToOld: (a, b) => b.added - a.added,
  oldToNew: (a, b) => a.added - b.added
}
