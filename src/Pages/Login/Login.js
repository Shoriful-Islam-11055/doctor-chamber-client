import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user.firstName);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl p-6">
        <div className="">
          <h2 className="text-center text-4xl font-bold py-6">LOGIN</h2>
          <form>
              
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-full mb-2 text-xl"
              />
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="text-2xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-full text-xl"
              />
              <label className="label mb-2">
                <span className="label-text-alt cursor-pointer text-lg text-red-500">
                  Forgot password
                </span>
              </label>
            </div>

            <div className="form-control w-full max-w-full">
              <input
                name="submit"
                type="submit"
                value="SUBMIT"
                className="btn btn-wide w-full"
              />
              <label className="text-center">
                New to chamber?&nbsp;
                <span className="label-text-alt cursor-pointer text-lg text-primary">
                  Create Account
                </span>
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
