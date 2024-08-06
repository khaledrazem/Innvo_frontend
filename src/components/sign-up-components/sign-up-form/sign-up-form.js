import { useContext } from "react";
import UploadImage from "src/components/data-input/upload-image/upload-image";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as AppleLogo } from "src/public/svg/Apple Logo.svg";
import { ReactComponent as GoogleLogo } from "src/public/svg/Google Logo.svg";
import classes from "./sign-up-form.module.css";

function SignUpForm({ register, errors, getValues }) {
  const { userType } = useContext(UserSessionContext);

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1>INVVO</h1>

        <label className={classes.welcometext}>Create Your Account</label>

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

      <div className={classes.formcontainer}>
        <div className={classes.imageupload}>
          <div className={classes.imageuploadcont}>
            <UploadImage
              register={register}
              name={"profileicon"}
              height={296}
              width={285}
              text={"Profile Photo"}
            ></UploadImage>
          </div>
        </div>

        <div className={classes.forminputs}>
          <div className={classes.inputfield}>
            <label>
              Full Name*
              {errors.fullname && (
                <label className={classes.error}>
                  {errors.fullname.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("fullname", {
                required: " is required",
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Email Address*
              {errors.email && (
                <label className={classes.error}>{errors.email.message}</label>
              )}
            </label>
            <input
              type="text"
              {...register("email", {
                required: " is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: " is invalid",
                },
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Username*
              {errors.username && (
                <label className={classes.error}>
                  {errors.username.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("username", {
                required: " is required",
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Location*
              {errors.location && (
                <label className={classes.error}>
                  {errors.location.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("location", {
                required: " is required",
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Password*
              {errors.password && (
                <label className={classes.error}>
                  {errors.password.message}
                </label>
              )}
            </label>
            <input
              type="password"
              {...register("password", {
                required: " is required",
                minLength: {
                  value: 6,
                  message: "must be at least 6 characters long",
                },
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Confirm Password*
              {errors.passwordConfirm && (
                <label className={classes.error}>
                  {errors.passwordConfirm.message}
                </label>
              )}
            </label>
            <input
              type="password"
              {...register("passwordConfirm", {
                required: " is required",
                validate: (value) =>
                  value === getValues("password") || " do not match",
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Age*
              {errors.age && (
                <label className={classes.error}>{errors.age.message}</label>
              )}
            </label>
            <input
              type="text"
              {...register("age", {
                required: " is required",
                pattern: {
                  value: /^\d*$/,
                  message: " is invalid",
                },
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Gender*
              {errors.gender && (
                <label className={classes.error}>{errors.gender.message}</label>
              )}
            </label>
            <select
              defaultValue={"select"}
              {...register("gender", {
                required: " is required",
                validate: (value) => value !== "select" || " is required",
              })}
            >
              <option disabled value={"select"}>
                Select Gender
              </option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          </div>

          <div className={classes.inputfield}>
            <label>
              Industry
              {errors.industry && (
                <label className={classes.error}>
                  {errors.industry.message}
                </label>
              )}
            </label>
            <input type="text" {...register("industry")} />
          </div>

          <div className={classes.inputfield}>
            <label>
              Job Title/Role*
              {errors.job && (
                <label className={classes.error}>{errors.job.message}</label>
              )}
            </label>
            <input
              type="text"
              {...register("job", {
                required: " is required",
              })}
            />
          </div>

          <div className={classes.inputfield}>
            <label>
              Company Size
              {errors.companysize && (
                <label className={classes.error}>
                  {errors.companysize.message}
                </label>
              )}
            </label>
            <input type="text" {...register("companysize")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
