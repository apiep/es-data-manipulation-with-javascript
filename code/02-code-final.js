const data = [
  ['Car', 0],
  ['Smartphone', 2],
  ['Gorengan', 5],
  ['Notebook', 1],
  ['Apple', 1],
  ['Orange', 2]
]

const getPreTotal = (name) => {
  const vocal = ['a', 'i', 'u', 'e', 'o']
  return vocal.includes(name[0].toLowerCase())
    ? 'an'
    : 'a'
}
const getTotal = (item) => {
  switch (item.total) {
    case 0: return 'no'
    case 1: return getPreTotal(item.thing)
    default: return item.total
  }
}
const getThing = (data) => {
  if (data.total > 1) return `${data.thing}s`
  return data.thing
}
const formatData = (data) => {
  return {
    thing: data[0],
    total: data[1]
  }
}
const getResult = (data) => {
  return data
    .map(it => formatData(it))
    .map((item) => {
      const thing = getThing(item)
      const total = getTotal(item)
      return `You have ${total} ${thing}`
    })
    .reduce((acc, item) => acc + item + '\n', '')
}
const result = getResult(data)
/*
result should be
You have no Car
You have 2 Smartphones
You have 5 Gorengans
You have a Notebook
*/

console.log(result)
