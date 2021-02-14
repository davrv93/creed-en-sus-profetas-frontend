import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ReaderService {
    constructor(private http: HttpClient) { }

    private root = `${environment.apis.root}/bible_reading/`;
    private book = `${environment.apis.root}/book/`;
    private bookLanguages = `${environment.apis.root}/book_languages/`;
    private chapters = `${environment.apis.root}/chapters/`;
    private verses = `${environment.apis.root}/verses/`;
    private spiritProphecy = `${environment.apis.root}/spirit_prophecy_chapter_language/`;
    getReading(params: any) {
        return this.http.get(`${this.root}`, { params }).toPromise();
    }

    getBooks(params: any) {
        return this.http.get(`${this.book}`, { params }).toPromise();
    }

    getChapter(params: any) {
        return this.http.get(`${this.chapters}`, { params }).toPromise();
    }

    getBookLanguages(params: any) {
        return this.http.get(`${this.bookLanguages}`, { params }).toPromise();
    }

    getVerses(params: any) {
        return this.http.get(`${this.verses}`, { params }).toPromise();
    }

    getSpiritProphecy(params: any) {
        return this.http.get(`${this.spiritProphecy}`, { params }).toPromise();
    }
}