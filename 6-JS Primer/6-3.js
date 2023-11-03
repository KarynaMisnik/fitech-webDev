/* ERRORS BC YOU CAN'T EXPORT FUNC LIKE THIS. BUT THESE ARE ANSWERS  */ 

/* Learning to write functions! */

const fun = () => {
  return "Learning to write functions!";
};

export default fun;

/* Function with a parameter */

const returnMessage = (message) => {
  // add code here
  return `Message: ${message}`
};

export default returnMessage;

/* Function with a parameter and a default value */
const nameBox = (name= 'John Doe') => {
  // add code here
return  `* ${name} *`
};

export default nameBox;