import { Component } from '@angular/core';
import { acknowledgmentsData, overviewData, pageHeader } from './hra-sop.content';

@Component({
  selector: 'ccf-hra-sop',
  templateUrl: './hra-sop.component.html',
  styleUrls: ['./hra-sop.component.scss']
})
export class HraSopComponent {
  pageHeader = pageHeader
  tableTitle = "Standard Operating Procedures";
  overviewData = overviewData
  acknowledgmentsData = acknowledgmentsData
}
