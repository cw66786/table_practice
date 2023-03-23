import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/table-data';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  posts!: Post[];
  idAsc: boolean = true;
  titleAsc: boolean = false;
  titleSort: boolean = false;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.getInfo().subscribe((res) => (this.posts = res));
  }

  sortById() {
    this.titleSort = false;
    if (this.idAsc !== true) {
      this.idAsc = true;
      this.posts = this.posts.sort((a, b) =>
        a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      );
    } else {
      this.idAsc = false;
      this.posts = this.posts.sort((a, b) =>
        a.id > b.id ? -1 : a.id < b.id ? 1 : 0
      );
    }
  }

  sortByTitle() {
    this.titleSort = true;
    if (this.titleAsc !== true) {
      this.titleAsc = true;
      this.posts = this.posts.sort((a, b) =>
        a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      );
    } else {
      this.titleAsc = false;
      this.posts = this.posts.sort((a, b) =>
        a.title > b.title ? -1 : a.title < b.title ? 1 : 0
      );
    }
  }
}
