export const extend = Object.assign;

export const isObject = (val) => val !== null && typeof val === "object";

export const hasChanged = (val, newValue) => !Object.is(val, newValue);

export const hasOwn = (val, key) =>
  Object.prototype.hasOwnProperty.call(val, key);

export const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => {
    return c ? c.toUpperCase() : "";
  });
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toHandlerkey = (str) => {
  return str ? "on" + capitalize(str) : "";
};
