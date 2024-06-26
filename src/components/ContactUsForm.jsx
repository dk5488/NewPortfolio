import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../axios/axiosConfig";
function ContactForm() {
  const { register,  formState: { errors } } = useForm();

   const handleSubmit = async(e) => {
    console.log(e);
    e.preventDefault();
    try {
      await axiosInstance.post('/contact',e.target);
      alert("Query Submitted successfully")
    } catch (error) {
      console.log("Message not send",error);
      alert("Server Facing some issues try again later");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className=" bg-custom-gradient1 opacity-75 p-8 rounded-lg "
    >
      <div className="mb-4 rounded-full">
        <label htmlFor="name" className="block text-gray-700 mb-2 translate-x-3">Name*</label>
        <input 
          type="text" 
          id="name"
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("name", { required: true })} 
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2 translate-x-3">Email*</label>
        <input 
          type="email" 
          id="email" 
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
        />
        {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="query" className="block text-gray-700 mb-2 translate-x-3">Query</label>
        <textarea 
          id="query" 
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("query")} 
        />
      </div>

      <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded  " >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
