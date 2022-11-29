import { Component, OnInit } from '@angular/core';
import { headerCardDetails, overviewData, displayedColumnsData, headerInfo} from './hra-millitome.content';
import { EMPTY, Observable } from 'rxjs';
import { TableDataService } from '../../services/table-data/tabledata.service';
import { TableData } from '../../components/table/table';
import { ChooseVersion } from 'src/app/components/choose-version/choose-version';

@Component({
  selector: 'hra-millitome',
  templateUrl: './hra-millitome.component.html',
  styleUrls: ['./hra-millitome.component.scss']
})
export class HraMillitomeComponent implements OnInit {

  version: ChooseVersion = {release: 'hra-millitome.csv', version:''};
  headerCardDetails = headerCardDetails;
  overViewData = overviewData;
  tableTitle = 'Millitome Catalog'
  displayedColumnsData = displayedColumnsData;
  headerInfo = headerInfo;

  tableData: Observable<TableData[]> = EMPTY;

  constructor(private readonly dataService: TableDataService) { }

  setData(version: ChooseVersion): void {
    this.tableData = this.dataService.getData(version.release);
  }

  ngOnInit(): void {
    this.setData(this.version);
  }

}
