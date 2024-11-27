// 1. new Date() Creates a new Date object with the current date
// and time.
// 2. Key Methods:
// getTimel): Milliseconds since Epoch.
// getFullY ear): 4-digit year getDay(): Day of the week getMinutes): Current minute
// getHours: Current hour
// 3. Crucial for timestamps, scheduling, etc.
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getMilliseconds());
