export const getValue = (obj, path) => {
  if(!obj || obj == null) return;
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey])
} 

export const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => getValue(obj, path) + sum, 0)
}
