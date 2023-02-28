import { useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {};
    Array.from(formRef.current.elements).forEach((el) => {
      if (el.name !== "") data[el.name] = el.value;
    });
    //call to api -> data
    console.log(data);
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
