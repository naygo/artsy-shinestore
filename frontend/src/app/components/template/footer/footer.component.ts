import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goInstagram() {
    window.open('https:\\instagram.com/artsy_shinestore?igshid=1gjinjwveduiw', "_blank");
  }

}
