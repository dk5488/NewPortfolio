// ContactUsForm.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAnimate, stagger, motion } from "framer-motion";
import axiosInstance from "../axios/axiosConfig";

const staggerFields = stagger(0.1, { startDelay: 0.15 });

function ContactUsForm({ handleSubmitClick }) {
  const { register, formState: { errors } } = useForm();
  const [scope, animate] = useAnimate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/contact', e.target);
      alert("Query Submitted successfully");
      handleSubmitClick(); 
    } catch (error) {
      console.log("Message not sent", error);
      handleSubmitClick(); 
      alert("Server is facing some issues, try again later");

    }
  };

  useEffect(() => {
    animate(
      ".form-field",
      { opacity: 1, scale: 1, filter: "blur(0px)" },
      { duration: 0.2, delay: staggerFields }
    );
  }, [animate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-custom-gradient1 opacity-75 p-8 rounded-lg"
      ref={scope}
    >
      <motion.div
        className="form-field mb-4 rounded-full"
        initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      >
        <label htmlFor="name" className="block text-gray-700 mb-2 translate-x-3">
          Name*
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
      </motion.div>

      <motion.div
        className="form-field mb-4"
        initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      >
        <label htmlFor="email" className="block text-gray-700 mb-2 translate-x-3">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Valid email is required</span>
        )}
      </motion.div>

      <motion.div
        className="form-field mb-4"
        initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      >
        <label htmlFor="query" className="block text-gray-700 mb-2 translate-x-3">
          Query
        </label>
        <textarea
          id="query"
          className="w-full p-2 bg-custom-gradient2 rounded-full"
          {...register("query")}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded"
        whileTap={{ scale: 0.97 }}
      >
        Submit
      </motion.button>
    </form>
  );
}

export default ContactUsForm;
