import CarDetails from "./CarDetails";

const App = () => {
  return (
    <div>
      <CarDetails initialData={{ model: "Fiat", year: 2015, color: "white" }} />
    </div>
  );
};

export default App;
