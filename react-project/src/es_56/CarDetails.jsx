import { useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {};
    formRef.current.elements.forEach((el) => {
      data[el.name] = el.value;
    });
    //call to api -> data
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmitForm}>
      <input name="model" defaultValue={initialData.model} />
      <input name="year" defaultValue={initialData.year} />
      <input name="color" defaultValue={initialData.color} />
      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default CarDetails;
