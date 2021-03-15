module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let bracket of str) {
      for (let subArray of bracketsConfig) {
          if (bracket === subArray[0]) {
              if (subArray[0] === subArray[1] && stack[stack.length - 1] === subArray[0]) {
                  stack.pop();
              } else {
                  stack.push(bracket);
              }
          } else {
              if (bracket === subArray[1] && stack[stack.length - 1] !== subArray[0]) {
                  return false;
              } else if (bracket === subArray[1] && stack[stack.length - 1] === subArray[0]) {
                  stack.pop();
              }
          }
      }
  }
  return (stack.length === 0);
}