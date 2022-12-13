import { TableDataService } from '../../services/table-data/tabledata.service';
import { TableData } from '../../components/table/table';
import { ChooseVersion } from '../../components/choose-version/choose-version';
import { Component, OnInit } from '@angular/core';
import { headerCardDetails, overviewData, existingTablesData, exploreTablesData, sopLinksData, displayedColumnsData, headerInfo, versionData } from './ccf-asctb-table-page.contents';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderItems } from 'src/app/components/page-header/page-header-items';
import { PageDataItems } from 'src/app/components/page-data/page-data';
import { SopLinks } from 'src/app/components/sop-links/sop-links';

@Component({
  selector: 'ccf-anatomical-structures',
  templateUrl: './ccf-asctb-table-page.component.html',
  styleUrls: ['./ccf-asctb-table-page.component.scss']
})
export class CcfTablePageComponent implements OnInit {

  headerCardDetails: PageHeaderItems[];
  overviewData: PageDataItems[];
  existingTablesData: PageDataItems[];
  exploreTablesData: PageDataItems[];
  sopLinksData: SopLinks[]
  displayedColumnsData = displayedColumnsData
  headerInfo = headerInfo
  versionData: ChooseVersion[]
  release: ChooseVersion;

  tableData: Observable<TableData[]> = EMPTY;

  constructor(private readonly dataService: TableDataService, private readonly route: ActivatedRoute) { 
    const data = route.snapshot.data['ccfTablePage']
    this.headerCardDetails = data.headerCardDetails
    this.overviewData = data.overviewData
    this.existingTablesData = data.existingTablesData
    this.exploreTablesData = data.exploreTablesData
    this.sopLinksData = data.sopLinksData
    this.versionData = data.versionData
  }

  setData(version: ChooseVersion): void {
    this.tableData = this.dataService.getData(version.file);
  }

  ngOnInit(): void {
    this.setData(this.versionData[0]);
    this.release = this.versionData[0];
  }
}
