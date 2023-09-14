export default function orderByProps(obj, sorting = []) {
  const resultArr = [];
  const sortArray = [];

  for (const prop of sorting) {
    resultArr.push({ key: prop, value: obj[prop] });
  }

  for (const key in obj) {
    if (!sorting.includes(key)) {
      sortArray.push({ key, value: obj[key] });
    }
  }

  sortArray.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return [...resultArr, ...sortArray];
}
