function hour12(hour) {
  if (hour > 13) return hour - 12;
  return hour;
}

const hour = new Date().getHours();
const minutes = new Date().getMinutes();
const newHour = hour12(hour);

const time = `${newHour}:${minutes}`;

document.getElementById('nowTime').innerText = time;
