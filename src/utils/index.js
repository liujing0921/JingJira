export const isFalsy = (value) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  // 因为对象是引用类型，不要污染传入的对象
  // object.name=123
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    // isFalsy()比!value好，因为!value没有排除0
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
