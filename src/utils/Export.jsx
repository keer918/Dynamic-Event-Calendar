import dayjs from "dayjs";

export const exportEvents = (events, currentDate, format = "json") => {
  const monthEvents = Object.entries(events).filter(([date]) =>
    dayjs(date).isSame(currentDate, "month")
  );

  if (format === "json") {
    const data = JSON.stringify(monthEvents, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentDate.format("MMMM-YYYY")}-events.json`;
    a.click();
  } else if (format === "csv") {
    const csvData = monthEvents
      .map(([date, events]) =>
        events.map((event) => `${date},${event.name}`).join("\n")
      )
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentDate.format("MMMM-YYYY")}-events.csv`;
    a.click();
  }
};
