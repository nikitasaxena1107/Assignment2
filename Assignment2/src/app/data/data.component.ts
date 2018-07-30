import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from "../model/data.model";
import { FilterService } from '../services/filter.service';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  private _url : string = "assets/data/data.json";
  defaultSelectedValue : string = "--Select--";

  rows : Data[];
  filterString = '';
  private unFilteredData : Data[];

  selectedNBFC : string = this.defaultSelectedValue;
  selectedSysImp_NotImp : string = this.defaultSelectedValue;
  selectedDepositCat : string = this.defaultSelectedValue;
  selectedSubList : string = this.defaultSelectedValue;

  columns = [
    { name : 'NBFC', prop : 'NBFC' },
    { name : 'Systemically non important/important', prop : 'sysImp_NotImp' },
    { name : 'Deposit category', prop : 'depositCat' },
    { name : 'Sub-list', prop : 'subList' },
    { name : 'Guideline 1', prop : 'guideline1' },
    { name : 'Guideline 2', prop : 'guideline2' },
    { name : 'Guideline 3', prop : 'guideline3' },
    { name : 'Guideline 4', prop : 'guideline4' },
    { name : 'Guideline 5', prop : 'guideline5' },
    { name : 'Guideline 6', prop : 'guideline6' }
  ];

  constructor(private dataService : DataService, private filterService : FilterService){}

  ngOnInit() {
     this.dataService.loadData(this._url)
      .subscribe(
          (data : Data[]) => {
            this.rows = data,
            this.unFilteredData = this.rows,
            console.log(this.rows);
        }
      ); 
   }

  onFilterCall(event, propName) {
    this.filterString = event.target.value;
    this.rows =this.filterService.onFilter(this.rows, this.filterString, propName )
  }

  onClear() {
    this.rows = this.unFilteredData;
    this.selectedNBFC = this.defaultSelectedValue;
    this.selectedSysImp_NotImp = this.defaultSelectedValue;
    this.selectedDepositCat = this.defaultSelectedValue;
    this.selectedSubList = this.defaultSelectedValue;
  }

}
