"use strict";

const slider = document.querySelector(".slider");
const sliderElements = document.querySelectorAll(".slider-element");

const btn_right = document.querySelector(".arrow-right");
const btn_left = document.querySelector(".arrow-left");

class App {
  constructor(offset, position) {
    this.offset = offset;
    this.position = position;

    btn_right.addEventListener("click", this._scrollToRight.bind(this));
    btn_left.addEventListener("click", this._scrollToLeft.bind(this));
  }

  _addActiveClass(element) {
    sliderElements.forEach((el) =>
      el.classList.remove("active-slider-element")
    );
    element.classList.add("active-slider-element");
  }

  _scrollToRight() {
    if (this.position !== 5) {
      ++this.position;

      this._addActiveClass(
        document.querySelector(`.element--${this.position}`)
      );

      if (this.position === 3) {
        // this.offset = 0;
        this.offset += 115;
        slider.style.right = this.offset + "px";
      }
      if (this.position === 4) {
        this.offset += 115;
        slider.style.right = this.offset + "px";
      }
    }
  }

  _scrollToLeft() {
    if (this.position !== 1) {
      --this.position;
      this._addActiveClass(
        document.querySelector(`.element--${this.position}`)
      );

      if (this.position === 3) {
        this.offset -= 115;
        slider.style.right = this.offset + "px";
      }
      if (this.position === 2) {
        this.offset -= 115;
        slider.style.right = this.offset + "px";
      }
    }
  }
}

// active element is 3
const app = new App(100, 3);

// active element is 1
// const app = new App(0, 1);
