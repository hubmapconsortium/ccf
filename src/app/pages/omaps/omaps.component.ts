import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ChooseVersion } from 'src/app/components/choose-version/choose-version';
import { PageDataItems } from 'src/app/components/page-data/page-data';
import { PageHeaderItems } from 'src/app/components/page-header/page-header-items';
import { SopLinks } from 'src/app/components/sop-links/sop-links';
import { TableData } from 'src/app/components/table/table';
import { TableDataService } from 'src/app/services/table-data/tabledata.service';
import { acknowledgementsData, columnHeaders, displayedColumnsData, omapsHeading, omapsVersionData, overviewData, sopData } from './omaps.contents';

@Component({
  selector: 'ccf-omaps',
  templateUrl: './omaps.component.html',
  styleUrls: ['./omaps.component.scss']
})
export class OmapsComponent {
  omapsHeading: PageHeaderItems[]
  overviewData: PageDataItems[]
  sopData: SopLinks[]
  acknowledgementsData: PageDataItems[]
  omapsVersionData: ChooseVersion[]
  displayedColumnsData = displayedColumnsData
  columnHeaders = columnHeaders
  placeholderDate: ChooseVersion
  tableData: Observable<TableData[]> = EMPTY
  constructor(private readonly dataService: TableDataService, private readonly route: ActivatedRoute) { 
    const data = route.snapshot.data['omaps']
    this.omapsHeading = data.omapsHeading
    this.overviewData = data.overviewData
    this.sopData = data.sopData
    this.acknowledgementsData = data.acknowledgementsData
    this.omapsVersionData = data.omapsVersionData
    
  }

  setOmapsData(version: ChooseVersion): void {
    this.tableData = this.dataService.getData(version.file);
  }
  ngOnInit(): void {
    this.setOmapsData(this.omapsVersionData[0]);
    this.placeholderDate = this.omapsVersionData[0];
  }
}
