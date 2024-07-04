import SvgLoader from "src/utils/svg-loader";
import classes from "./add-product-privacy.module.css";
import privacySettingDatajson from "src/data/privacysettings.json";
import { ReactComponent as SafeIcon } from "src/public/svg/Safe.svg";
import { useEffect, useState } from "react";

function AddProductPrivacy({ formSettings = null, register, setValue, name }) {
  const [selectedSettings, setSelectedSettings] = useState([]);

  let privacyData = privacySettingDatajson.settings;

  useEffect(() => {
    console.log(formSettings);
    if (formSettings != null) {
      setSelectedSettings(formSettings);
    }
  }, [formSettings]);

  useEffect(() => {
    register(name + ".selectedSettings", {
      validate: (value) => value.length > 0,
      message: "error plz chjeck",
    });
  }, [register, name]);

  useEffect(() => {
    console.log(selectedSettings);
    console.log("ASDQWE");

    setValue(name + ".selectedSettings", selectedSettings);
  }, [selectedSettings, setValue, name]);

  function handleSettingAdd(setting) {
    const isAlreadySelected = selectedSettings.some((item) => item === setting);
    if (!isAlreadySelected) {
      setSelectedSettings((prev) => [...prev, setting]);
    }
  }

  function handleSettingRemove(setting) {
    const updatedSettings = selectedSettings.filter((item) => item !== setting);
    setSelectedSettings(updatedSettings);
  }
  return (
    <div className={classes.container}>
      <div className={classes.privacyTitle}>
        <h5>Data Privacy</h5>
      </div>
      <div className={classes.description}>
        <textarea
          required
          {...register(name + ".description")}
          placeholder="Add Privacy Description"
        />
      </div>

      <div className={classes.privacybubble}>
        <div className={classes.topbubble}>
          <SafeIcon />
          <br />
          <input
            type="text"
            required
            {...register(name + ".details")}
            placeholder="Add Privacy Title Here"
          />
          <textarea
            required
            {...register(name + ".details")}
            placeholder="Privacy Details Here"
          />
          <br />

          <div className={classes.settingsrow}>
            {selectedSettings.map((setting) => {
              return setting != null ? (
                <div
                  className={classes.settings}
                  onClick={() => handleSettingRemove(setting)}
                >
                  <SvgLoader svg={setting.svg} />
                  <label>{setting.label}</label>
                </div>
              ) : null;
            })}
          </div>
        </div>

        <div className={classes.divider}></div>
        <div className={classes.settingoptions}>
          <h3>Select privacy settings</h3>
          <label>
            Choose icons that accurately reflect your tool’s data privacy and
            security measures.
          </label>
          <br /> <br />
          <div className={classes.settingsgrid}>
            {Array.isArray(privacyData) && privacyData.length > 0
              ? privacyData.map((setting) => {
                  return setting != null ? (
                    <div
                      className={classes.settings}
                      onClick={() => handleSettingAdd(setting)}
                    >
                      <SvgLoader svg={setting.svg} />
                      <label>{setting.label}</label>
                    </div>
                  ) : null;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPrivacy;
