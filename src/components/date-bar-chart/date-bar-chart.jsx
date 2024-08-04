import classes from "./date-bar-chart.module.css";
import { ResponsiveBar } from "@nivo/bar";

function DateBarChart({ data }) {
  const zipListsToDictionary = (values) => {
    const keys = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (keys.length !== values.length) {
      throw new Error("Keys and values lists must have the same length");
    }

    return keys.map((key, index) => ({ Month: key, value: values[index] }));
  };

  const getColor = (bar) => {
    return new Date().getMonth() === bar.index
      ? "var(--color-secondary)"
      : "var(--color-background)";
  };

  return (
    <div className={classes.container}>
      <ResponsiveBar
        data={zipListsToDictionary(data)}
        indexBy="Month"
        borderRadius="7px"
        colors={getColor}
        borderColor="var(--color-main-text)"
        borderWidth="2px"
        enableLabel={false}
        enableGridY={false}
        axisLeft={null}
        margin={{ top: 60, right: 50, bottom: 55, left: 0 }}
        padding={0.3}
        axisBottom={{ tickSize: 0, tickPadding: 12 }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 16,
                fill: "var(--color-main-text)",
                fontFamily: "var(--main-font)",
                fontWeight: 600,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default DateBarChart;
