import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";


const Registration = () => {
  //Registration or sign In with Google account
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  //Registration with email and password
  const [createUserWithEmailAndPassword, E_user, E_loading, E_error] =
    useCreateUserWithEmailAndPassword(auth);

  //For userName handling
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //Navigation for going specific page after registration
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user || E_user) {
    console.log(user);
  }

  //Loading show
  if (loading || E_loading || updating) {
    return <Loading></Loading>;
  }

  //Show error from react hooks
  let loginError;
  if (error || E_error) {
    loginError = (
      <p className="text-red-500">
        {error?.message || E_error?.message || updateError?.message}
      </p>
    );
  }

  //Form submission handling
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    //For Handling user name
    await updateProfile({ displayName: data.name });
    navigate("/appointment")
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl p-6">
        <div className="">
          <h2 className="text-center text-4xl font-bold py-4">SIGN UP</h2>

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
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Name is not valid", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
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
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-full  text-xl"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Length must be 6 or more", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {loginError}

            <div className="form-control w-full max-w-full">
              <input
                name="signUp"
                type="submit"
                value="SIGN UP"
                className="btn btn-wide w-full mt-3"
              />
              <label className="text-center">
                You have an Account?&nbsp;
                <Link
                  to="/login"
                  className="label-text-alt cursor-pointer text-lg text-primary"
                >
                  LOGIN
                </Link>
              </label>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="card-actions">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-wide w-full btn-outline"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
