/* Logging keys */
const logKeys = (map) => {
  for (const [key, value] of map) {
    console.log(key, value);
  }
};

export default logKeys;

/* Logging keys and values */
const logMap = (map) => {
    for(const [key, value] of map){
        console.log(`${key}: ${value}`)
    }
};

export default logMap;