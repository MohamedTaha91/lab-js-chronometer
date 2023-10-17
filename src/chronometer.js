class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
  this.intervalID = setInterval(()=>{
  
    console.log(this.currentTime)
    if(printTimeCallback){
      printTimeCallback()
    }

    this.currentTime++

},1000 )
  }

  getMinutes() {
  return Math.floor(this.currentTime/60)
  }

  getSeconds() {
  return Math.floor(this.currentTime %60)
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    
  }
}
