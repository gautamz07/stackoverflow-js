
const clickedMyBtn = (time) => {
  console.log(`Click fired at the ${time} of the throttle`)
}

const throttleFireAtStart = _.throttle(() => clickedMyBtn('start'), 2000, { 'trailing': false })
const throttleFireAtEnd = _.throttle(() => clickedMyBtn('end'), 2000, { 'leading': false })

document.getElementById('throttleFireAtStart').addEventListener('click', throttleFireAtStart)
document.getElementById('throttleFireAtEnd').addEventListener('click', throttleFireAtEnd)
