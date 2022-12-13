import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { PageDataItems } from 'src/app/components/page-data/page-data';
import { PageHeaderItems } from 'src/app/components/page-header/page-header-items';
import { TableData } from 'src/app/components/table/table';
import { TableDataService } from 'src/app/services/table-data/tabledata.service';
import { azimuthHeader, comparisonAsctbVsAzimuth, displayedColumnsData, headerInfo, overviewAzimuthData, TermsOfUseData } from './ccf-asctb-azimuth.content';

@Component({
  selector: 'ccf-asctb-azimuth',
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
  tableData = this.dataService.getData('azimuth.csv');
}
