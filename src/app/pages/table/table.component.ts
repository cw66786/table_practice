import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/table-data';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  posts!: Post[];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getInfo().subscribe(res => this.posts = res)
  }

}
