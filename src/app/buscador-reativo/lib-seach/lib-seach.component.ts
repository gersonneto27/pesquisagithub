import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-lib-seach',
  templateUrl: './lib-seach.component.html',
  styleUrls: ['./lib-seach.component.css']
})
export class LibSeachComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.github.com/';
  results$: Observable<any> | undefined;
  total: number | undefined;
  url: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      this.results$ = this.http.get(this.SEARCH_URL + 'search/users?q=' + value + '+in:user')
        .pipe(
          tap((res: any) => this.total = res.total_count),
          map((res: any) => res.items )
        );
    }
  }
}
