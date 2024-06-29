import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    // Initialization logic
  }

  ngAfterViewInit(): void {
    // jQuery logic can be safely used here after the view has initialized
    
  }
}
