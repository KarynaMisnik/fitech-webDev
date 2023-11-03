/* Returning a variable from an object */
const name = (obj) => {
  // implement here

  return obj.name;
};

export default name;

/* Creating an object */
const create = (name, age) => {
  // implement here
return{
    name: name,
    age: age
}
};

export default create;

/* Iterating over data in an object */
const logObject = (object) => {
  // implement here
  for (const [key, value] of Object.entries(object)) {
  console.log(`${key} -> ${value}`);
}
};

export default logObject;