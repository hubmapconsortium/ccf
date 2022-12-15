import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CcfOntologyComponent } from './ccf-ontology.component';
import { SimpleTileModule } from 'src/app/components/simple-tile/simple-tile.module';
import { PageDataModule } from 'src/app/components/page-data/page-data.module';
import { SimpleImageModule } from 'src/app/components/simple-image/simple-image.module';
import { CardButtonLongModule } from 'src/app/components/card-button-long/card-button-long.module';
import { MarkdownModule } from 'ngx-markdown';
import { AnnouncementCardModule } from 'src/app/components/announcement-card/announcement-card.module';


@NgModule({
  declarations: [
    CcfOntologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleTileModule,
    PageDataModule,
    SimpleImageModule,
    CardButtonLongModule,
    AnnouncementCardModule,
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: []
})
export class CcfOntologyModule { }
