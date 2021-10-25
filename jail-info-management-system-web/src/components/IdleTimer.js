class IdleTimer {
    constructor({ timeout, onTimeout }) {
        //timeout = amt of time before timeout occurs
        //onTimeout = function to call when timeout occurs
      this.timeout = timeout;
      this.onTimeout = onTimeout;
  
      this.eventHandler = this.updateExpiredTime.bind(this);
      this.tracker();
      this.startInterval();
    }
  
    startInterval() {
      this.updateExpiredTime();
  
      this.interval = setInterval(() => {
        const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
        if (expiredTime < Date.now()) {
          if (this.onTimeout) {
            this.onTimeout();
            this.cleanUp();
          }
        }
      }, 1000);
    }
  
    updateExpiredTime() {
      if (this.timeoutTracker) {
        clearTimeout(this.timeoutTracker);
      }
      this.timeoutTracker = setTimeout(() => {
        localStorage.setItem("_expiredTime", Date.now() + this.timeout * 1000);
      }, 300);
    }
  
    tracker() {
        //dictates which events will cause the timer to listen for and reset the timer for
      window.addEventListener("mousemove", this.eventHandler);
      window.addEventListener("scroll", this.eventHandler);
      window.addEventListener("keydown", this.eventHandler);
    }
  
    cleanUp() {
      localStorage.removeItem("_expiredTime");
      clearInterval(this.interval);
      window.removeEventListener("mousemove", this.eventHandler);
      window.removeEventListener("scroll", this.eventHandler);
      window.removeEventListener("keydown", this.eventHandler);
    }
  }
  export default IdleTimer;
  