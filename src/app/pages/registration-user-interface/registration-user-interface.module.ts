import { TableModule } from '../../components/table/table.module';
import { ChooseVersionModule } from '../../components/choose-version/choose-version.module';
import { SopLinksModule } from 'src/app/components/sop-links/sop-links.module';
import { PageDataModule } from '../../components/page-data/page-data.module';
import { BottomToolbarModule } from '../../components/bottom-toolbar/bottom-toolbar.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationUserInterfaceComponent } from './registration-user-interface.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { YoutubeModelModule } from '../../components/youtube-model/youtube-model.module';
import { UseButtonModule } from 'src/app/components/use-button/use-button.module';
import { AnnouncementCardModule } from 'src/app/components/announcement-card/announcement-card.module';


@NgModule({
  declarations: [
    RegistrationUserInterfaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PageHeaderModule,
    BottomToolbarModule,
    PageDataModule,
    SopLinksModule,
    ChooseVersionModule,
    TableModule,
    UseButtonModule,
    MarkdownModule,
    YoutubeModelModule,
    AnnouncementCardModule
  ],
  providers: [],
  bootstrap: []
})
export class RegistrationUserInterfaceModule { }
