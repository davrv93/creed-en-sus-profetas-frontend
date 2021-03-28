import { Component, OnInit, Input } from '@angular/core';
import { ReaderService } from '../tab1/services/reader.service';

@Component({
  selector: 'app-bible-reader',
  templateUrl: './bible-reader.component.html',
  styleUrls: ['./bible-reader.component.scss'],
})
export class BibleReaderComponent implements OnInit {
  @Input() name: string;
  book = {
    name: ''
  };
  chapter = {
    chapter: ''
  };
  verses = [];
  constructor(
    private readerService: ReaderService

  ) {

  }

  ngOnInit() {
    this.getBibleRead();
  }


  getDate = function () {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let final_day = '';
    let final_month = '';
    console.log(day);
    if (day < 10) {
      final_day = '0' + day;
    } else {
      final_day = String(day);
    }

    if (month < 10) {
      final_month = '0' + month
    }

    return year + '-' + final_month + '-' + final_day;

  }
  getBook = function (bible_reading) {
    var params = {};
    params['book'] = bible_reading.book;
    params['code_iso'] = 'ES';

    this.readerService.getBookLanguages(params).then(r => {
      let results = r.results
      console.log(results);
      if (results && results.length > 0) {
        this.book = results[0];
      }
      console.log(this.book);
    });
  };

  getChapter = function (bible_reading) {
    var params = {};
    params['book'] = bible_reading.book;
    params['chapter'] = bible_reading.start_chapter;
    params['code_iso'] = 'ES';

    this.readerService.getChapter(params).then(r => {
      let results = r.results
      if (results && results.length > 0) {
        this.chapter = results[0];
      }
    });
  };
  getVerses = function (bible_reading) {
    var params = {};
    params['book'] = bible_reading.book;
    params['chapter'] = bible_reading.start_chapter;
    params['code_iso'] = 'ES';

    this.readerService.getVerses(params).then(r => {
      let results = r.results

      this.verses = results;

    });
  };

  getBibleRead = function () {
    this.progress = true;

    var param_date = this.getDate();

    let data = {
      start_date: param_date,
    }

    console.log(this.readerService);
    this.readerService.getReading(data).then(r => {
      let results = r[0];
      this.getBook(results);
      this.getChapter(results);
      this.getVerses(results);
      console.log(results);

    });
  }

}
