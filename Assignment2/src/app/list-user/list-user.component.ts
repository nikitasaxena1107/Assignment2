import { Component, OnInit,  } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit{

  public rows = [];
  editing = {};
  temp = [];

  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  private _url : string = "assets/data/list-data.json";

  constructor(private dataService : DataService){}

  ngOnInit() {
     /* this.dataService.loadData(this._url).subscribe(
       data => this.rows = data
     );
     console.log('data : ',this.rows); */

     this.dataService.loadData(this._url)
      .subscribe(
          (data : any[]) => {this.rows = data,
          console.log(this.rows);
        }
      );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }
}