export default function appendToEachArrayValue(array, appendString) {
  const list = [];

  for (const element of array) {
    list.push(appendString + element);
  }
  return list;
}
