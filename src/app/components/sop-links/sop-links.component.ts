import { Component, Input } from '@angular/core';
import { SopLinks } from './sop-links';

@Component({
  selector: 'ccf-sop-links',
  templateUrl: './sop-links.component.html',
  styleUrls: ['./sop-links.component.scss']
})
export class SopLinksComponent {

  @Input()
  links: SopLinks[] = [];

  constructor() { }

}
