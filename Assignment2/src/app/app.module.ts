import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListUserComponent} from "./list-user/list-user.component";
import { DataService } from './services/data.service';
import { DataComponent } from './data/data.component';
import { UniquePipe } from './pipes/unique.pipe';
import { FilterService } from './services/filter.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    DataComponent,
    UniquePipe,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [
    DataService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
