import { useForm } from "react-hook-form";
import SignUpForm from "src/components/sign-up-components/sign-up-form/sign-up-form";
import classes from "./sign-up.module.css";
import { useState } from "react";
import TermsOfService from "src/components/sign-up-components/tos/tos";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const [tos, setTos] = useState(false);

  const {
    register,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  async function handleCreate(e) {
    e.preventDefault();
    const isValid = await trigger();
    if (isValid) {
      setTos(true);
    }
  }

  const onSubmit = (data, e) => {
    console.log(data, e);
    navigate("/login/sign-in");
  };
  const onError = (errors, e) => {
    console.log(getValues());
    console.log(errors, e);
  };
  return (
    <form
      className={tos ? classes.toscontainer : classes.container}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {tos ? (
        <>
          <TermsOfService />
          <div className={classes.buttons}>
            <button className={classes.acceptbutton} type="submit">
              I Agree
            </button>
            <button
              className={classes.backbutton}
              onClick={() => setTos(false)}
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          <SignUpForm
            register={register}
            getValues={getValues}
            errors={errors}
          />
          <button
            className={classes.createbutton}
            type="button"
            onClick={handleCreate}
          >
            Create
          </button>
          <div className={classes.signup}>
            <label>Already have an account? </label>
            <Link to={"/login/sign-in"}> Login</Link>
          </div>
        </>
      )}
    </form>
  );
}

export default SignUpPage;
