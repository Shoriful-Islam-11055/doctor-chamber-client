import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, E_user, E_loading, E_error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || E_user) {
      navigate(from, { replace: true });
    }
  }, [user, E_user, navigate, from]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //Loading show
  if (loading || E_loading) {
    return <Loading></Loading>;
  }

  //Show error from react hooks
  let loginError;
  if (error || E_error) {
    loginError = (
      <p className="text-red-500">{error?.message || E_error?.message}</p>
    );
  }

  //Form submission handling
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl p-6">
        <div className="">
          <h2 className="text-center text-4xl font-bold py-6">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                name="login"
                type="submit"
                value="LOGIN"
                className="btn btn-wide w-full mt-3"
              />
              <label className="text-center">
                New to chamber?&nbsp;
                <Link
                  to="/registration"
                  className="label-text-alt cursor-pointer text-lg text-primary"
                >
                  Create Account
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

export default Login;
