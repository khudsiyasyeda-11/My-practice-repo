import React from "react";
import { useForm } from "react-hook-form";

const ReactFormHook = () => {
  const { register, handleSubmit } = useForm();
  const SubmitData = (data) => {
    console.log(data);
    alert(data.name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(SubmitData)}>
        <input {...register("name")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactFormHook;
