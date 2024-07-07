function clock () {
    let days: string[]= [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let months: string[]= [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let hrs: any = document.getElementById("hours");
    let min: any = document.getElementById("minutes");
    let sec: any = document.getElementById("seconds");
    let period: any = document.getElementById("ampm");
    let day: any = document.getElementById("dd");
    let date: any = document.getElementById("ddmmyy");
     
    let time= new Date(); //?Date() is a method through which u can show the current date and time.

    let h: number | string = time.getHours();
    let m: number | string = time.getMinutes();
    let s: number | string = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
     
//? Here if you will console any of this  variable it will show the current time in the console. h will give the current hour, s the current sec, and m the current min
  if(h > 12){
    h = h-12;
  }
  if(h == 0){
    h = 12;
}
let ampm = h <= 12 ? "AM" : "PM";

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;



hrs.innerHTML = h; 
min.innerHTML = m; 
sec.innerHTML = s; //? Here the seconds wont be refreshed on its own. To make it refresh on its own we will use setInterval.
period.innerHTML = ampm;
day.innerHTML = days[d];
date.innerHTML = months[mm] + " " + dd + "," + " " + yy;
}

setInterval(clock, 1000); //? Here, clock is a function, and we  are calling it every 1000 milliseconds. As we know we write the function first and then define the time in setInterval.

