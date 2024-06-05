import { useEffect, useState } from "react";
import classes from "./payment-tab.module.css";

function PaymentTab({ data, register, errors }) {
  const [verificationUploaded, setVerificationUploaded] = useState(false);
  const [securityUploaded, setSecurityUploaded] = useState(false);

  useEffect(() => {
    if (data?.profileImg?.src) {
      setVerificationUploaded(data.verificationDocuments);
    }
    if (data?.banner?.src) {
      setSecurityUploaded(data.securityMeasures);
    }
  }, [data]);

  const handleVerificationUpload = (event) => {
    console.log(event);
    if (event.target.files.length > 0) {
      setVerificationUploaded(true);
    }
  };

  const handleSecurityUpload = (event) => {
    console.log(event);
    if (event.target.files.length > 0) {
      setSecurityUploaded(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.datarow}>
        <div className={classes.datainput}>
          <label>Bank Name</label>
          <input type="text" {...register("bankName")} />
          {errors.paymentTab?.bankName && <p>{errors.bankName.message}</p>}
        </div>

        <div className={classes.datainput}>
          <label>Account Holder's Name</label>
          <input type="text" {...register("accountHolderName")} />
          {errors.paymentTab?.accountHolderName && (
            <p>{errors.accountHolderName.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Bank Account Number</label>
          <input type="text" {...register("bankAccountNumber")} />
          {errors.paymentTab?.bankAccountNumber && (
            <p>{errors.bankAccountNumber.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Bank Routing Number</label>
          <input type="text" {...register("bankRoutingNumber")} />
          {errors.paymentTab?.bankRoutingNumber && (
            <p>{errors.bankRoutingNumber.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>SWIFT/BIC Code (optional)</label>
          <input type="text" {...register("swiftCode")} />
          {errors.paymentTab?.swiftCode && <p>{errors.swiftCode.message}</p>}
        </div>

        <div className={classes.datainput}>
          <label>Preferred Payment Method</label>
          <select {...register("paymentMethod")}>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="PayPal">PayPal</option>
            <option value="Check">Check</option>
          </select>
          {errors.paymentTab?.paymentMethod && (
            <p>{errors.paymentMethod.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Currency Preference</label>
          <select {...register("currencyPreference")}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          {errors.paymentTab?.currencyPreference && (
            <p>{errors.currencyPreference.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Tax Identification Number (TIN)</label>
          <input type="text" {...register("taxIdNumber")} />
          {errors.paymentTab?.taxIdNumber && (
            <p>{errors.taxIdNumber.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Payment Schedule</label>
          <select {...register("paymentSchedule")}>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
          </select>
          {errors.paymentTab?.paymentSchedule && (
            <p>{errors.paymentSchedule.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Minimum Payout Threshold</label>
          <input type="text" {...register("payoutThreshold")} />
          {errors.paymentTab?.payoutThreshold && (
            <p>{errors.payoutThreshold.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Verification Documents</label>

          <div className={classes.fileselect}>
            {verificationUploaded ? (
              <p>[Uploaded]</p>
            ) : (
              <p>[Click to upload]</p>
            )}

            <input
              className={classes.fileupload}
              type="file"
              {...register("verificationDocuments", {
                onChange: (e) => handleVerificationUpload(e),
              })}
            />
          </div>
          {errors.paymentTab?.verificationDocuments && (
            <p>{errors.verificationDocuments.message}</p>
          )}
        </div>

        <div className={classes.datainput}>
          <label>Security Measures</label>

          <div className={classes.fileselect}>
            {securityUploaded ? <p>[Uploaded]</p> : <p>[Click to upload]</p>}
            <input
              className={classes.fileupload}
              type="file"
              {...register("securityMeasures", {
                onChange: (e) => handleSecurityUpload(e),
              })}
            />
          </div>

          {errors.paymentTab?.securityMeasures && (
            <p>{errors.securityMeasures.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentTab;
