import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

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
    $(document).ready(() => {
      $('.skills-list li').hover(
        function() {
          $(this).css('color', '#007BFF');
        },
        function() {
          $(this).css('color', '#333');
        }
      );
    });
  }
}
