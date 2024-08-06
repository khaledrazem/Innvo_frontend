import { useContext, useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";
import classes from "./information-tab.module.css";

import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as EmailIcon } from "src/public/svg/Profile Socials/Profile- Email.svg";
import { ReactComponent as InstagramIcon } from "src/public/svg/Profile Socials/Profile- Insta.svg";
import { ReactComponent as WebIcon } from "src/public/svg/Profile Socials/Profile- Web.svg";

function InformationTab({ data, register, errors }) {
  const { userType } = useContext(UserSessionContext);

  const [profileImg, setProfileImg] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [extraWebsites, setExtraWebsites] = useState(0);

  useEffect(() => {
    if (data?.profileImg?.src) {
      setProfileImg(data.profileImg.src);
    }
    if (data?.banner?.src) {
      setBannerImg(data.banner.src);
    }
    console.log(data.links);
    if (data?.links?.extralink?.length > 0) {
      setExtraWebsites(data.links.extralink.length);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      <div className={classes.summarybanner}>
        <div className={classes.banner}>
          <img src={bannerImg || data.banner.src}></img>
          <div className={classes.imageinput}>
            <EditIcon></EditIcon>
            <input
              type="file"
              accept="image/*"
              {...register("bannerImage.src", {
                onChange: (event) => {
                  const file = event.target.files[0];
                  console.log(file);
                  setBannerImg(URL.createObjectURL(file));
                },
              })}
            />
          </div>
        </div>

        <div className={classes.summary}>
          <div className={classes.profileimage}>
            <img src={profileImg || data.profileImg.src}></img>
            {/* TODO: add placeholder */}
            <div className={classes.profileimageinput}>
              <EditIcon></EditIcon>
              <input
                type="file"
                accept="image/*"
                {...register("profileImage.src", {
                  onChange: (event) => {
                    const file = event.target.files[0];
                    console.log(file);
                    setProfileImg(URL.createObjectURL(file));
                  },
                })}
              />
            </div>
          </div>
          <div className={classes.summaryinfo}>
            <h4>{data.companyName}</h4>
            {userType === "dev" && <label>{data.secondaryCompanyName}</label>}
            <label>{data.devName}</label>
          </div>
        </div>
      </div>

      <div className={classes.formFields}>
        {userType === "dev" && (
          <div className={classes.formRow}>
            <div className={classes.formInput}>
              <label>Display Name</label>
              <input type="text" {...register("displayName")} />
              {errors.displayName && <p>{errors.displayName.message}</p>}
            </div>

            <div className={classes.formInput}>
              <label>Contact Information</label>
              <input type="text" {...register("contactInformation")} />
              {errors.contactInformation && (
                <p>{errors.contactInformation.message}</p>
              )}
            </div>
          </div>
        )}

        {userType === "user" && (
          <>
            <div className={classes.formRow}>
              <div className={classes.formInput}>
                <label>Full Name</label>
                <input type="text" {...register("fullname")} />
                {errors.fullname && <p>{errors.fullname.message}</p>}
              </div>

              <div className={classes.formInput}>
                <label>Region</label>
                <input type="text" {...register("region")} />
                {errors.region && <p>{errors.region.message}</p>}
              </div>
            </div>
          </>
        )}

        <div className={classes.formInput}>
          <label>Bio Description</label>
          <textarea {...register("bioDescription")} />
          {errors.bioDescription && <p>{errors.bioDescription.message}</p>}
        </div>

        {userType === "user" && (
          <>
            <div className={classes.formRow}>
              <div className={classes.formInput}>
                <label>Email</label>
                <input type="text" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className={classes.formInput}></div>
            </div>
          </>
        )}
        {userType === "dev" && <div></div>}

        <div className={classes.websitesformInput}>
          <label>Links</label>
          <div className={classes.websiteform}>
            <input type="text" {...register("links.website")} />
            <WebIcon />
          </div>

          {errors.links?.website && <p>{errors.links.website.message}</p>}
          <div className={classes.websiteform}>
            <input type="text" {...register("links.email")} />
            <EmailIcon />
          </div>

          {errors.links?.email && <p>{errors.links.email.message}</p>}
          <div className={classes.websiteform}>
            <input type="text" {...register("links.instagram")} />
            <InstagramIcon />
          </div>

          {errors.links?.instagram && <p>{errors.links.instagram.message}</p>}

          {Array.from({ length: extraWebsites }).map((_, index) => (
            <div key={index} className={classes.websiteform}>
              <input type="text" {...register(`links.extralink.${index}`)} />
              <WebIcon
                onClick={() =>
                  setExtraWebsites((prev) => Math.max(0, prev - 1))
                }
              />
            </div>
          ))}
          {extraWebsites < 1 ? (
            <AddIcon
              className={classes.AddIcon}
              onClick={() => setExtraWebsites((prev) => Math.min(2, prev + 1))}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default InformationTab;
