const add = (a, b) => {
  return a + b;
};
const sub = (a,b) => {
  return a-b;
};
const mul = (a,b) => {
    return a*b;
  };
const name="thapa";
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// so instead of writing this multiple time we can write
module.exports={add,sub,mul,name};