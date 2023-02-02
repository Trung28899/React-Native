export function findAndUpdateArray(objectArray, findItem, updateItem) {
  const { findKey, findValue } = findItem;
  const { updateKey, updateValue } = updateItem;

  const index = objectArray.findIndex((item) => item[findKey] === findValue);
  let arrayReplicated = [...objectArray];

  if (index !== -1) {
    arrayReplicated[index] = {
      ...arrayReplicated[index],
      [updateKey]: updateValue,
    };
  }

  return arrayReplicated;
}
