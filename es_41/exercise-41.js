const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setUser = () => localStorage.setItem("user", JSON.stringify(user));

const getUser = () => JSON.parse(localStorage.getItem("user"));

setUser();
console.log(getUser());
