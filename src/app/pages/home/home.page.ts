import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = 0;
  selectedSlide: any;
  @ViewChild('slides', { static: false }) slider: IonSlides;
  
  constructor() { }

  options = {
    slidesPerView: 1.5,
    centered: true,
    spaceBetweenView:10
  }

  sliderOptions ={
  initialSlide: 0,
  slidesPerView: 1,
  speed:400
  }

  ngOnInit() {
  }


   async segmentChanged(event){
   console.log(this.segment)
   this.slider.slideTo(this.segment);
   //await this.selectedSlide.slideTo(this.segment); 
   }
  

  async slidesChanged(slides: IonSlides) {
  this.selectedSlide = slides;
  slides.getActiveIndex().then( selectedIndex =>{
  this.segment = selectedIndex; 
   });
   

  }


}
