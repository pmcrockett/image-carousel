class NavButton {
  buttonElem;
  // 0: left; 1: right
  direction;

  constructor(_htmlElem) {
    this.buttonElem = _htmlElem;
    
    if (_htmlElem.classList.contains("right")) {
      this.direction = 1;
      console.log("right");
    } else {
      this.direction = 0;
      console.log("left");
    }

    this.attachClickListener();
  }

  attachClickListener() {
    this.buttonElem.addEventListener("click", () => {
      console.log("click listener");
    });
  }
}

export function createImageCarousels() {
  // Need to do this for all carousel instances
  const leftButton = new NavButton(document.querySelector(".carousel-nav.button.left"));
  //leftButton.attachClickListener();
}