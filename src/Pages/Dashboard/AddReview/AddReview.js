import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";
const AddReview = () => {
  // Taken From React Hook Form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  // Taken From React Hook Form On Submit
  const onSubmit = (data) => {
    axios.post("https://rocky-sands-89317.herokuapp.com/review", data).then((res) => {
      alert("Review Added successfully");
      reset();
    });
  };
  return (
    <div className="add-Review my-0 py-5 container-fluid">
      <h2 className="fw-bold">Please Give A Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <textarea {...register("details")} placeholder="Short Description" />
        <input
          type="number"
          min="0"
          step="0.01"
          max="5"
          {...register("rating")}
          placeholder="Rating"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
