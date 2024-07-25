import tosJson from "src/public/text/tos.json";
import classes from "./tos.module.css";

function TermsOfService({}) {
  let tos = tosJson.tos;

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1>INVVO</h1>

        <label className={classes.welcometext}>Terms of service</label>
      </div>

      <hr className={classes.divider}></hr>
      <div className={classes.toslist}>
        {tos.map((term, index) => {
          return (
            <div className={classes.termitem}>
              <label>
                {index + 1}. {term.title}
              </label>
              <label> {term.description}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TermsOfService;
