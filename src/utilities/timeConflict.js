function parseTime(time) {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
}

function parseMeetingTime(meetingTime) {
  if (!meetingTime) return null;

  const [days, timeRange] = meetingTime.split(" ");
  const [startTime, endTime] = timeRange.split("-");
  const splitDays = days.match(/[A-Z][a-z]*/g);

  return {
    days: splitDays || [],
    startTime: parseTime(startTime),
    endTime: parseTime(endTime),
  };
}

function haveTimeConflict(class1, class2) {
  const time1 = parseMeetingTime(class1.courseDetails.meets);
  const time2 = parseMeetingTime(class2.courseDetails.meets);

  if (!time1 || !time2) {
    return false;
  }

  const commonDays = time1.days.some((day) => time2.days.includes(day));

  if (!commonDays) {
    return false;
  }

  const overlap =
    time1.startTime < time2.endTime && time2.startTime < time1.endTime;

  return overlap;
}

export { haveTimeConflict };
