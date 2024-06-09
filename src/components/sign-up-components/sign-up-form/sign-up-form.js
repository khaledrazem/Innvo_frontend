import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AppleLogo } from "src/public/svg/Apple Logo.svg";
import { ReactComponent as GoogleLogo } from "src/public/svg/Google Logo.svg";
import classes from "./sign-up-form.module.css";
import { useForm } from "react-hook-form";
import UploadImage from "src/components/data-input/upload-image/upload-image";

function SignUpForm({ register, errors, getValues }) {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1>INNVO</h1>

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

      <div className={classes.divider}></div>

      <div className={classes.formcontainer}>
        <div className={classes.imageupload}>
          <label>Logo/Image</label>
          <UploadImage
            register={register}
            name={"profileicon"}
            height={237}
            width={245}
          ></UploadImage>
        </div>

        <div className={classes.forminputs}>
          <div className={classes.inputfield}>
            <label>
              Username
              {errors.username && (
                <label className={classes.error}>
                  {errors.username.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("username", {
                required: "is required",
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Email Address
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
          <div className={classes.inputfield}>
            <label>
              Phone Number
              {errors.phoneNumber && (
                <label className={classes.error}>
                  {errors.phoneNumber.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: "is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "is invalid",
                },
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Password
              {errors.password && (
                <label className={classes.error}>
                  {errors.password.message}
                </label>
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
          <div className={classes.inputfield}>
            <label>
              Confirm Password
              {errors.passwordConfirm && (
                <label className={classes.error}>
                  {errors.passwordConfirm.message}
                </label>
              )}
            </label>
            <input
              type="password"
              {...register("passwordConfirm", {
                required: "is required",
                validate: (value) =>
                  value === getValues("password") || " do not match",
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Company/Developer Name
              {errors.companyName && (
                <label className={classes.error}>
                  {errors.companyName.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("companyName", {
                required: "is required",
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Role/Title
              {errors.role && (
                <label className={classes.error}>{errors.role.message}</label>
              )}
            </label>
            <input
              type="text"
              {...register("role", {
                required: "is required",
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Website URL
              {errors.websiteUrl && (
                <label className={classes.error}>
                  {errors.websiteUrl.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("websiteUrl", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Invalid URL",
                },
              })}
            />
          </div>
          <div className={classes.inputfield}>
            <label>
              Social Media Links
              {errors.socialMedia && (
                <label className={classes.error}>
                  {errors.socialMedia.message}
                </label>
              )}
            </label>
            <input
              type="text"
              {...register("socialMedia", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Invalid URL",
                },
              })}
            />
          </div>
        </div>
      </div>

      <div className={classes.signup}>
        <label>Already have an account?</label>{" "}
        <Link to={"/login/sign-in/dev"}>Login</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
