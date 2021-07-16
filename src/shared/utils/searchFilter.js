const searchFilter = (item, value) => {
  const transformLowerCase = item.name.toLowerCase().trim()
  const transformSearch = value.toLowerCase().trim()
  const foundItem = transformLowerCase.includes(transformSearch)
  return foundItem
}

export default searchFilter
