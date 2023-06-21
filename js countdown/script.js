const endDate = "June 26, 2023 10:00:00";

document.getElementById('end-date').innerHTML = endDate;

const input = document.querySelectorAll('input');

function time() {
  const date = new Date(endDate);
  const now = new Date();


  const diff = (date - now) / 1000;
  console.log(diff);
  console.log(date);
  console.log(now);


//   condition h ki agar diff 0 se kam hua to ruk jao
    if(diff < 0) return;


//   days
  console.log(Math.floor(diff / 3600 /24));
  input[0].value = Math.floor(diff / 3600 /24);


//   hours
  console.log((Math.floor(diff / 3600) % 24));
  input[1].value = Math.floor(diff / 3600) % 24;


//   minutes
  console.log(Math.floor(diff / 60) % 60);
  input[2].value = Math.floor(diff / 60) % 60;


//   seconds
  console.log(Math.floor(diff % 60));
  input[3].value = Math.floor(diff % 60);
}

// ye h initial call - matlab ye page refresh hone par call hoga
time();


// 1 day = 24 hr
// 1 hr = 60 min
// 60 min = 3600 sec


// ye function page ko har second refresh krega
setInterval(
    () => {
        time()
    }, 
1000);