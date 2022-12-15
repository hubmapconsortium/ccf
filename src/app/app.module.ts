import { PageDataModule } from './components/page-data/page-data.module';
import { CcfTablePageModule } from './pages/ccf-asctb-table-page/ccf-asctb-table-page.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { AppRoutingModule } from './app-routing.module';
import { OverviewDataModule } from './pages/overview-data/overview-data.module';
import { BottomToolbarModule } from './components/bottom-toolbar/bottom-toolbar.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TwoDimRefPageModule } from './pages/two-dim-ref-page/two-dim-ref-page.module';
import { CcfOntologyModule } from './pages/ccf-ontology/ccf-ontology.module';
import { OverviewToolsModule } from './pages/overview-tools/overview-tools.module';
import { CcfReporterPageModule } from './pages/ccf-asctb-reporter-page/ccf-asctb-reporter-page.module';
import { YoutubeModelModule } from './components/youtube-model/youtube-model.module';
import { HraMillitomeModule } from './pages/hra-millitome/hra-millitome.module';
import { CcfExplorationUserInterfaceModule } from './pages/ccf-exploration-user-interface/ccf-exploration-user-interface.module';
import { RegistrationUserInterfaceModule } from './pages/registration-user-interface/registration-user-interface.module';
import { CellPopulationGraphsModule } from './pages/cell-population-graphs/cell-population-graphs.module';
import { HraApiModule } from './pages/hra-api/hra-api.module';
import { AboutModule } from './pages/about/about.module';
import { OverviewTrainingOutreachModule } from './pages/overview-training-outreach/overview-training-outreach.module';
import { TissueInfoPageModule } from './pages/tissue-info-page/tissue-info-page.module';
import { HraSopModule } from './pages/hra-sop/hra-sop.module';
import { OmapsModule } from './pages/omaps/omaps.module';
import { ThreeDimRefPageModule } from './pages/three-dim-ref-page/three-dim-ref-page.module';
import { CcfAsctbAzimuthModule } from './pages/ccf-asctb-azimuth/ccf-asctb-azimuth.module';
import { HraUsageMetricsModule } from './pages/hra-usage-metrics/hra-usage-metrics.module';
import { KaggleTwentyoneModule } from './pages/kaggle-twentyone/kaggle-twentyone.module';
import { KaggleTwoModule } from './pages/kaggle-two/kaggle-two.module';
import { HraEditorialBoardModule } from './pages/hra-editorial-board/hra-editorial-board.module';
import { CcfOrganVrGalleryModule } from './pages/ccf-organ-vr-gallery/ccf-organ-vr-gallery.module';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { OmapFaqModule } from './pages/omap-faq/omap-faq.module';
import { MarkdownModule } from 'ngx-markdown';
import { FourthReleaseNotesModule } from './pages/fourth-release-notes/fourth-release-notes.module';
import { AnnouncementCardModule } from './components/announcement-card/announcement-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    LandingPageModule,
    BottomToolbarModule,
    PageHeaderModule,
    OverviewDataModule,
    CcfTablePageModule,
    PageDataModule,
    AppRoutingModule,
    HttpClientModule,
    TwoDimRefPageModule,
    CcfOntologyModule,
    OverviewToolsModule,
    CcfReporterPageModule,
    YoutubeModelModule,
    HraMillitomeModule,
    CcfExplorationUserInterfaceModule,
    RegistrationUserInterfaceModule,
    YoutubeModelModule,
    CellPopulationGraphsModule,
    HraApiModule,
    AboutModule,
    OverviewTrainingOutreachModule,
    TissueInfoPageModule,
    HraSopModule,
    OmapsModule,
    ThreeDimRefPageModule,
    CcfAsctbAzimuthModule,
    HraUsageMetricsModule,
    KaggleTwentyoneModule,
    KaggleTwoModule,
    HraEditorialBoardModule,
    CcfOrganVrGalleryModule,
    NgxGoogleAnalyticsModule.forRoot('traking-code'),
    NgxGoogleAnalyticsRouterModule,
    OmapFaqModule,
    FourthReleaseNotesModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
    AnnouncementCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
