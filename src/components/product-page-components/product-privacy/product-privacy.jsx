import SvgLoader from "src/utils/svg-loader";
import classes from "./product-privacy.module.css";
import privacyDatajson from "src/data/privacy.json";
import {ReactComponent  as SafeIcon} from "src/public/svg/Safe.svg";


function ProductPrivacy({
   productId=null
}) {

  let privacyData = privacyDatajson.privacy;
  return privacyData!=null? (
    <div className={classes.container}>
      <div className={classes.privacyTitle}>
        <h5>Data Privacy</h5>
      </div>
      <div className={classes.description}>
          <label>{privacyData.description}</label>
        </div>

        <div className={classes.privacybubble}>
          <SafeIcon/>
          <h3>Your Data Privacy</h3>
          <label>{privacyData.details}</label>
          <div className={classes.settingsrow}>

          {Array.isArray(privacyData.settings) &&
          privacyData.settings.length > 0
            ? privacyData.settings.map((setting) => {
                return (
                  <div className={classes.settings}>
                  <SvgLoader svg={setting.svg} />
                    <label>{setting.label}</label>

                  </div>
                );
              })
            : null}
        </div>
        </div>

    </div>
  ): null;
}

export default ProductPrivacy;
