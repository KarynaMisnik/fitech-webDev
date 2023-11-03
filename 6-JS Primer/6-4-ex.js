/* Secret */
const secret = (value) => {
  if (value === 300) {
    return "This is Sparta!";
  }
  return value;
};

export default secret;

/* Absolute value */
const abs = (value) => {
    if(value<0){
        return value*-1
    }
  return value;
};

export default abs;

/* BetweenZeroAndTen */
const betweenZeroAndTen = (value) => {
  return value>=0 && value<=10;
};

export default betweenZeroAndTen;

/* Between */
const between = (value, lowerLimit, upperLimit) => {
    if(lowerLimit<=upperLimit){
        
    }
  return value>=lowerLimit && value<=upperLimit;
};

export default between;

/* From zero to ten */
const fromZeroToTen = (n) => {
    for(let n=0; n<11; n++){
        console.log(n)
    }
};

export default fromZeroToTen;

/* From one to five */
const fromOneToFive = (i) => {
    for(i=1; i<=5; i++){
        console.log(i)
    }
};

export default fromOneToFive;

/* From parameter to six */
const fromParamToSix = (param) => {
    for(param>=0; param<=6; param++){
        if(param>6){
          false  
        }
            console.log(param)

    }
};

export default fromParamToSix;

/* From parameter to parameter */
const fromParamToParam = (param1, param2) => {
    for(param1>=0; param1<=param2; param1++){
        if(param1>param2){
            return false;
            
        }
        console.log(param1)
    }
};

export default fromParamToParam;