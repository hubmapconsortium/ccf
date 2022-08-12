import { TableComponent } from './table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    declarations: [TableComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
    exports: [TableComponent]
})

export class TableModule{}