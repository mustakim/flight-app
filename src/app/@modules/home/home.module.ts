import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [HomeRoutingModule, CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, NgxPaginationModule],
  exports: [HomeComponent, SearchComponent]
})
export class HomeModule { }
