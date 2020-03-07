const slblock = document.querySelector('.slblock__slider');
const wdthScreen = document.documentElement.clientWidth;
let mass = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

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
    
    for(let i = 0; i < this.arr.length; i++) {      
      pict.setAttribute('src', `/pict/${this.arr[count]}`);
      console.log(this.arr[i]);
    }

    setInterval(() => {
      if(count == this.arr.length) {
        count = 0;
        pict.setAttribute('src', `/pict/${this.arr[count++]}`);
      } else {
        pict.setAttribute('src', `/pict/${this.arr[count++]}`);
      }
    }, 2000);

            
  }

}


let slider = new ShowSlide(slblock, mass);
slider.show();