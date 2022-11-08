import { Component, Input, OnInit } from '@angular/core';


let apiLoaded = false;

@Component({
  selector: 'youtube-model',
  templateUrl: './youtube-model.component.html',
  styleUrls: ['./youtube-model.component.scss']
})
export class YoutubeModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  @Input() height: number;

  @Input() width: number;

  @Input() videoId: string;

  @Input() title: string;

  @Input() playerTitle: string;


}
