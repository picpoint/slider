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
    let pict = this.blockslider.firstElementChild;
    
    setTimeout(() => {
      pict.style.position = 'relative';      
      for(let i = 0; i < this.arr.length; i++) {                
        setInterval(() => {
          if(offset < wdthScreen) {
            pict.setAttribute('src', `/pict/${this.arr[i]}`);
            offset += 5;            
            pict.style.right = offset + 'px';
          }
        }, 100);
      }
    }, 2000);
    
    
    
    //this.blockslider.firstElementChild.setAttribute('src', `/pict/${this.arr[0]}`);    
  }

}


let slider = new ShowSlide(slblock, mass);
slider.show();