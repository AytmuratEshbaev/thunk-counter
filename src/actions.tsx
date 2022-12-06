export function incrementValue(num: number) {
  return {
    type: "INCREMENT",
    value: num
  };
}

export function decrementValue(num: number) {
  return {
    type: "DECREMENT",
    value: num
  };
}
