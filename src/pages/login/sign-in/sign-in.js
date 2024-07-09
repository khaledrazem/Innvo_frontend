import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as AppleLogo } from "src/public/svg/Apple Logo.svg";
import { ReactComponent as GoogleLogo } from "src/public/svg/Google Logo.svg";
import classes from "./sign-in.module.css";

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data, e);
    navigate("/dev");
  };
  const onError = (errors, e) => {
    console.log(getValues());
    console.log(errors, e);
  };

  return (
    <form
      className={classes.container}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className={classes.head}>
        <h1>INNVO</h1>

        <label className={classes.welcometext}>Welcome Back</label>

        <div className={classes.signinbuttons}>
          <button type="button">
            <GoogleLogo />
            <label>Continue with Google</label>
          </button>
          <button type="button">
            <AppleLogo />
            <label>Continue with Apple</label>
          </button>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.fields}>
        <div className={classes.inputfields}>
          <label>
            Email
            {errors.email && (
              <label className={classes.error}>{errors.email.message}</label>
            )}
          </label>
          <input
            type="text"
            {...register("email", {
              required: "is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "is invalid",
              },
            })}
          />
        </div>
        <div className={classes.inputfields}>
          <label>
            Password
            {errors.password && (
              <label className={classes.error}>{errors.password.message}</label>
            )}
          </label>
          <input
            type="password"
            {...register("password", {
              required: "is required",
              minLength: {
                value: 6,
                message: "must be at least 6 characters long",
              },
            })}
          />
        </div>
      </div>

      <div className={classes.signup}>
        <label>Don't have an account?</label>{" "}
        <Link to={"/login/sign-up"}>Sign up</Link>
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default SignInPage;
