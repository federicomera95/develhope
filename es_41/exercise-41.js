const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setUser = () => localStorage.setItem('user',JSON.parse(user));

const getUser = () => JSON.stringify(localStorage.getItem('user'));

setUser();
console.log(getUser());