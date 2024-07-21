import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  highC:string = 'assets/highclass.jpg';
  middleC:string = 'assets/middle-class.jpg';
  lowC:string = 'assets/low-class.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
