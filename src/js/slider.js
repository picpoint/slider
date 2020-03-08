const slblock = document.querySelector('.slblock__slider');
const wdthScreen = document.documentElement.clientWidth;
let mass = ['01.jpg', '02.jpg', '03.jpg'];

console.log(`width screen - ${wdthScreen}`);


class ShowSlide {
  constructor(blockslider, arr) {
    this.blockslider = blockslider;
    this.arr = arr;
  } 

  show() {
    let offset = 0;
    let count = 0;
    let pict = this.blockslider.firstElementChild;
    pict.style.position = 'relative';           
    pict.setAttribute('src', `/pict/${this.arr[count]}`);
    
    setInterval(() => {
      if(count == this.arr.length) {
        count = 0;
        pict.setAttribute('src', `/pict/${this.arr[count++]}`);
      } else {
        pict.setAttribute('src', `/pict/${this.arr[count++]}`);
      }
    }, 3000);
            
  }

}


let slider = new ShowSlide(slblock, mass);
slider.show();