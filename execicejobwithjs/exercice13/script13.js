let totalMinute= parseInt(prompt("Entre le nombre en minute"))

let heure= Math.floor(totalMinute/60);
let minute=totalMinute%60
alert(totalMinute+ " minute equivalent a "+ heure+" heure et "+ minute +"minute")