import classes from "./date-bar-chart.module.css";
import { ResponsiveBar } from "@nivo/bar";

function DateBarChart({ data }) {
  function zipListsToDictionary(values) {
    let keys = [
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

    const mapped = [];
    keys.forEach((key, index) => {
      mapped.push({ Month: key, value: values[index] });
    });

    return mapped;
  }

  const getColor = (bar) => {
    return new Date().getMonth() == bar.index
      ? "var(--color-secondary)"
      : "var(--color-background)";
  };

  return (
    <div className={classes.container}>
      <ResponsiveBar
        data={zipListsToDictionary(data)}
        indexBy={"Month"}
        borderRadius={"8px"}
        colors={getColor}
        borderColor="var(--color-main-text)"
        borderWidth={"1px"}
        enableLabel={false}
        enableGridY={false}
        axisLeft={null}
        margin={{ top: 60, right: 50, bottom: 55, left: 10 }}
        padding={0.4}
        axisBottom={{ tickSize: 0, tickPadding: 12 }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 14,
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
