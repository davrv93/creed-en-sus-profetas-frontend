import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bible-reader',
  templateUrl: './bible-reader.component.html',
  styleUrls: ['./bible-reader.component.scss'],
})
export class BibleReaderComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
