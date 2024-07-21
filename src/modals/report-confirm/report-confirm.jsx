import { useState } from "react";
import { ReactComponent as TickIcon } from "src/public/svg/Tick.svg";
import classes from "./report-confirm.module.css";

import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function ReportConfirmModal({ modalIsOpen, closeModal }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={classes.container}
      parentSelector={() => document.querySelector("#reportform")}
    >
      {submitted ? (
        <div className={classes.contentsubmitted}>
          <TickIcon className={classes.tickicon} />
          <label className={classes.labelmessage}>
            Your report has been successfully submitted.Thank you for your
            feedback. We are processing your report and will notify you once it
            has been reviewed.
          </label>
          <div className={classes.buttons}>
            <button>
              <Link className={classes.productlink} to={"/dev/discover"} />
              Go to Discover
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.contentconfirm}>
          <h2>Confirm Your Report</h2>
          <label className={classes.labelmessage}>
            Are you sure you want to proceed with the Report Submission?
          </label>

          <div className={classes.buttons}>
            <button onClick={() => setSubmitted(true)}>Yes, Submit</button>
            <button onClick={() => closeModal()}>No, Go Back</button>
          </div>
        </div>
      )}
    </ReactModal>
  );
}

export default ReportConfirmModal;
