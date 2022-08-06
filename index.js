//REP CHART
let serializedReps = localStorage.getItem('reps')
if(serializedReps === null) {
    reps = []
} else {
    reps = JSON.parse(serializedReps)
}
let newNumberOfReps = window.prompt('Enter your number of reps: ')
reps.push(newNumberOfReps)
renderChart(reps)
serializedReps = JSON.stringify(reps)
localStorage.setItem('reps', serializedReps)

//PUSH-UPS CHART
let serializedPushUps = localStorage.getItem('pushUps')
if(serializedPushUps === null) {
    pushUps = []
} else {
    pushUps = JSON.parse(serializedPushUps)
}
let newNumberOfPushUps = window.prompt('Enter your number of push-up reps: ')
pushUps.push(newNumberOfPushUps)
renderChart(pushUps, 'Push-Ups')
serializedPushUps = JSON.stringify(pushUps)
localStorage.setItem('pushUps', serializedPushUps)

//SIT-UPS CHART
let serializedSitUps = localStorage.getItem('sitUps')
if(serializedSitUps === null) {
    sitUps = []
} else {
    sitUps = JSON.parse(serializedSitUps)
}
let newNumberOfSitUps = window.prompt('Enter your number of sit-up reps: ')
sitUps.push(newNumberOfSitUps)
renderChart(sitUps, 'Sit-Ups')
serializedSitUps = JSON.stringify(sitUps)
localStorage.setItem('sitUps', serializedSitUps)

//SQUATS CHART
let serializedSquats = localStorage.getItem('squats')
if(serializedSquats === null) {
    squats = []
} else {
    squats = JSON.parse(serializedSquats)
}
let newNumberOfSquats = window.prompt('Enter your number of squat reps: ')
squats.push(newNumberOfSquats)
renderChart(squats, 'Squats')
serializedSquats = JSON.stringify(squats)
localStorage.setItem('squats', serializedSquats)

//LAPS CHART
let serializedLaps = localStorage.getItem('laps')
if(serializedLaps === null) {
    laps = []
} else {
    laps = JSON.parse(serializedLaps)
}
let newNumberOfLaps = window.prompt('Enter your number of Lap reps: ')
laps.push(newNumberOfLaps)
renderChart(laps, 'Laps')
serializedLaps = JSON.stringify(laps)
localStorage.setItem('laps', serializedLaps)