import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map } from 'rxjs';
import { PageDataItems } from 'src/app/components/page-data/page-data';
import { PageHeaderItems } from 'src/app/components/page-header/page-header-items';
import { ChooseVersion } from 'src/app/components/choose-version/choose-version';
import { TableData } from 'src/app/components/table/table';
import { TableDataService } from 'src/app/services/table-data/tabledata.service';
import { additionalHeaders, additionalColumnsData, azimuthHeader, comparisonAsctbVsAzimuth, displayedColumnsData, headerInfo, overviewAzimuthData, TermsOfUseData, cellData, cellHeaders } from './ccf-asctb-azimuth.content';

@Component({
  selector: 'asctb-azimuth',
  templateUrl: './ccf-asctb-azimuth.component.html',
  styleUrls: ['./ccf-asctb-azimuth.component.scss']
})
export class CcfAsctbAzimuthComponent {

  constructor(private readonly dataService: TableDataService, private route: ActivatedRoute) { 
    const data = route.snapshot.data['ccfAsctbAzimuth']
    this.azimuthHeader = data.azimuthHeader
    this.overviewAzimuthData = data.overviewAzimuthData
    this.TermsOfUseData = data.TermsOfUseData
    this.comparisonAsctbVsAzimuth = data.comparisonAsctbVsAzimuth
  }

  azimuthHeader: PageHeaderItems[]
  overviewAzimuthData: PageDataItems[]
  TermsOfUseData: PageDataItems[]
  comparisonAsctbVsAzimuth: PageDataItems[]
  headerInfo= headerInfo
  displayedColumnsData= displayedColumnsData
  additionalHeaders = additionalHeaders
  additionalColumnsData = additionalColumnsData;
  cellData = cellData
  cellHeaders = cellHeaders

  tableData: Observable<TableData[]> = EMPTY;
  columns: Observable<string[]> = EMPTY;

  setData(): void {
    const data = this.dataService.getData('azimuth.csv', displayedColumnsData);
    this.tableData = data.pipe(map(result => result.data));
    console.log(this.tableData)
  }

  ngOnInit(): void {
    this.setData();
  }
}
