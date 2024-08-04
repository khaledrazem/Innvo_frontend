import { useState } from "react";
import { useForm } from "react-hook-form";
import toolsDatajson from "src/data/tools.json";
import ReportConfirmModal from "src/modals/report-confirm/report-confirm";
import classes from "./report.module.css";

function ReportPage() {
  let toolsData = toolsDatajson.toolsData;
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    setOpenModal(false);
  };
  const onSubmit = (data) => {
    console.log(data);
    setOpenModal(true);
  };
  return (
    <div id="reportform" className={classes.container}>
      <h2 className={classes.header}>
        Report Page<label>{toolsData[0].title}</label>
      </h2>
      <label className={classes.description}>
        We take your reports seriously. Our team carefully reviews each
        submission to ensure the quality and safety of our platform. Your
        feedback helps us maintain a high standard of service and protect our
        community. Please let us know why you are reporting this tool. Your
        feedback helps us maintain the quality and integrity of our platform.
      </label>

      <form
        id="formdividion"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.entry}>
          <input
            type="radio"
            id="option1"
            {...register("group1", { required: true })}
            value="Inappropriate Content"
          />
          <div className={classes.text}>
            <h5>Inappropriate Content</h5>
            <label htmlFor="option1">
              This tool contains offensive, inappropriate, or harmful content.
            </label>
          </div>
        </div>

        <div className={classes.entry}>
          <input
            type="radio"
            id="option2"
            {...register("group1", { required: true })}
            value="Misleading Information"
          />
          <div className={classes.text}>
            <h5>Misleading Information</h5>
            <label htmlFor="option2">
              The information provided is false or misleading.
            </label>
          </div>
        </div>

        <div className={classes.entry}>
          <input
            type="radio"
            id="option3"
            {...register("group1", { required: true })}
            value="Technical Issues"
          />
          <div className={classes.text}>
            <h5>Technical Issues</h5>
            <label htmlFor="option3">
              There are bugs or errors that hinder the tool's functionality.
            </label>
          </div>
        </div>

        <div className={classes.entry}>
          <input
            type="radio"
            id="option4"
            {...register("group1", { required: true })}
            value="Privacy Concerns"
          />
          <div className={classes.text}>
            <h5>Privacy Concerns</h5>
            <label htmlFor="option4">
              This tool violates user privacy or data protection standards.
            </label>
          </div>
        </div>

        <div className={classes.entry}>
          <input
            type="radio"
            id="option5"
            {...register("group1", { required: true })}
            value="Violation of Terms"
          />
          <div className={classes.text}>
            <h5>Violation of Terms</h5>
            <label htmlFor="option5">
              The tool violates our terms of service or community guidelines.
            </label>
          </div>
        </div>

        <div className={classes.entry}>
          <input
            type="radio"
            id="other"
            {...register("group1", { required: true })}
            value="Other"
          />
          <div className={classes.text}>
            <h5>Other (Please specify)</h5>
            <label htmlFor="other">
              Please provide any additional details or comments regarding your
              report.
            </label>
          </div>
        </div>

        {watch("group1") === "Other" && (
          <textarea {...register("otherReason", { required: true })}></textarea>
        )}

        {errors.group1 && <span>This field is required</span>}
        {errors.otherReason && <span>Please specify the reason</span>}

        <button type="submit" className={classes.submitbutton}>
          Submit Report
        </button>
      </form>
      <ReportConfirmModal
        modalIsOpen={openModal}
        closeModal={closeModal}
      ></ReportConfirmModal>
    </div>
  );
}

export default ReportPage;
