import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InformationTab from "src/components/profile-components/information-tab/information-tab";
import PaymentTab from "src/components/profile-components/payment-tab/payment-tab";
import profileJsonData from "src/data/profiledata.json";
import classes from "./profile.module.css";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("information");

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  let profileData = profileJsonData;

  useEffect(() => {
    reset(profileData);
  }, [profileData]);

  return (
    <div className={classes.container}>
      {/* <br />
      <div className={classes.bubblecontainer}> */}
      <div className={classes.pagecontainer}>
        {/* <div className={classes.navtab}>
          <button
            className={
              activeTab == "information"
                ? classes.navbuttonselected
                : classes.navbutton
            }
            onClick={() => setActiveTab("information")}
          >
            Information
          </button>
          <button
            className={
              activeTab == "payment"
                ? classes.navbuttonselected
                : classes.navbutton
            }
            onClick={() => setActiveTab("payment")}
          >
            Payment
          </button>
        </div> */}

        <form className={classes.formcontainer}>
          {activeTab === "information" && (
            <InformationTab
              register={register}
              errors={errors}
              data={profileData}
            />
          )}
          {activeTab === "payment" && (
            <PaymentTab
              register={register}
              errors={errors}
              data={profileData}
            />
          )}
          <button className={classes.submitbutton} type="submit">
            Save
          </button>
        </form>
        {/* </div>
      <br /> */}
      </div>
    </div>
  );
}

export default ProfilePage;
