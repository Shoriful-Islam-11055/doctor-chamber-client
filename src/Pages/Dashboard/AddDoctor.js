import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialties, isLoading } = useQuery("specialty", () =>
    fetch("http://localhost:5000/specialty").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  //Form submission handling
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl p-6">
        <div className="">
          <h2 className="text-3xl font-bold mt-3 text-accent">Add a Doctor</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Full Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Full Name"
                className="input input-bordered w-full max-w-full text-xl"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-full text-xl"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email is not valid", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Specialty</span>
              </label>

              <select {...register('specialty')} class="select select-bordered w-full max-w-full  text-xl">
                  {
                      specialties.map(specialty =>  <option
                       key={specialty._id}
                       value = {specialty.name}
                        >{specialty.name}</option>)
                  }
              </select>
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Image</span>
              </label>
              <input
                type="file"
                placeholder="image"
                className="input input-bordered w-full max-w-full text-xl"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.file?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-full">
              <input
                name="signUp"
                type="submit"
                value="ADD"
                className="btn btn-wide w-full mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
