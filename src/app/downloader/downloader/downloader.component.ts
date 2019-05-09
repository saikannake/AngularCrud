import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit {
  downloaderService: any;
  contents: any;

  download() {
    this.downloaderService.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }

  constructor() { }

  ngOnInit() {
  }

}
