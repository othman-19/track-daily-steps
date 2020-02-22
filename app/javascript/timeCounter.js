export const estimation = (startTime, endTime) => {
  if (endTime) {
    const start = new Date(startTime).getTime()
    const end = new Date(endTime).getTime()
    let ms = (end-start)
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return `${h} h : ${m} m : ${s} s`;
  } 
    return 'No end time added'
}
export const workedTime  = (startTime, endTime) => {
  if (endTime && endTime > Date.now()){
    let d, h, m, s;
    const start = new Date(startTime).getTime()
    const now = Date.now()
    const ms = now-start
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return `${h} h : ${m} m : ${s} s`;
  }
  return 'End time achieved'
}
export const GoalPerformance = (startTime, endTime) => {
  if (endTime){
    const start = new Date(startTime).getTime()
    const end = new Date(endTime).getTime()
    const now = Date.now()
    let time = (now-start)/(end-start)
    time = Math.floor(time) * 100 
    if (time > 100){
      return 100
    }
    if (time < 0){
      return 0
    }
    return time
  }
  return 'No end time added for this goal'
}