const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setUser = () => localStorage.setItem("user", JSON.stringify(user));

setUser();
