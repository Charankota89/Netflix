import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { FAQComponent } from './NavigatingComponents/faq/faq.component';
import { AccountComponent } from './NavigatingComponents/account/account.component';
import { PrivacyComponent } from './NavigatingComponents/privacy/privacy.component';
import { JobsComponent } from './NavigatingComponents/jobs/jobs.component';
import { OnlyonnetflixComponent } from './NavigatingComponents/onlyonnetflix/onlyonnetflix.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { WaystowatchComponent } from './NavigatingComponents/waystowatch/waystowatch.component';
import { SpeedtestComponent } from './NavigatingComponents/speedtest/speedtest.component';
import { HerosectionComponent } from './NavigatingComponents/onlyonnetflix/herosection/herosection.component';
import { YourNextWatchComponent } from './NavigatingComponents/onlyonnetflix/your-next-watch/your-next-watch.component';
import { KDramasComponent } from './NavigatingComponents/onlyonnetflix/k-dramas/k-dramas.component';
import { IndianTvDramasComponent } from './NavigatingComponents/onlyonnetflix/indian-tv-dramas/indian-tv-dramas.component';
import { AwardWinningTvShowsComponent } from './NavigatingComponents/onlyonnetflix/award-winning-tv-shows/award-winning-tv-shows.component';
import { InternationalTvShowsComponent } from './NavigatingComponents/onlyonnetflix/international-tv-shows/international-tv-shows.component';
import { UsTvShowsComponent } from './NavigatingComponents/onlyonnetflix/us-tv-shows/us-tv-shows.component';
import { HindiLanguageMoviesComponent } from './NavigatingComponents/onlyonnetflix/hindi-language-movies/hindi-language-movies.component';
import { TvSerialsComponent } from './NavigatingComponents/onlyonnetflix/tv-serials/tv-serials.component';
import { InternationaltvdramasComponent } from './NavigatingComponents/onlyonnetflix/internationaltvdramas/internationaltvdramas.component';
import { ComedyMoviesComponent } from './NavigatingComponents/onlyonnetflix/comedy-movies/comedy-movies.component';
import { EpicworldsComponent } from './NavigatingComponents/onlyonnetflix/epicworlds/epicworlds.component';
import { RomanticMoviesComponent } from './NavigatingComponents/onlyonnetflix/romantic-movies/romantic-movies.component';
import { UstvdramasComponent } from './NavigatingComponents/onlyonnetflix/ustvdramas/ustvdramas.component';
import { TvcomediesComponent } from './NavigatingComponents/onlyonnetflix/tvcomedies/tvcomedies.component';
import { InabitofahurryComponent } from './NavigatingComponents/onlyonnetflix/inabitofahurry/inabitofahurry.component';
import { PlansComponent } from './NavigatingComponents/onlyonnetflix/plans/plans.component';
import { CriticallyacclaimedtvshowsComponent } from './NavigatingComponents/onlyonnetflix/criticallyacclaimedtvshows/criticallyacclaimedtvshows.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    OnlyonnetflixComponent,
    FAQComponent,
    AccountComponent,
    PrivacyComponent,
    JobsComponent,
    OnlyonnetflixComponent,
    NavbarComponent,
    FooterComponent,
    WaystowatchComponent,
    SpeedtestComponent,
    HerosectionComponent,
    YourNextWatchComponent,
    KDramasComponent,
    IndianTvDramasComponent,
    AwardWinningTvShowsComponent,
    InternationalTvShowsComponent,
    UsTvShowsComponent,
    HindiLanguageMoviesComponent,
    TvSerialsComponent,
    InternationaltvdramasComponent,
    ComedyMoviesComponent,
    EpicworldsComponent,
    RomanticMoviesComponent,
    UstvdramasComponent,
    TvcomediesComponent,
    InabitofahurryComponent,
    PlansComponent,
    CriticallyacclaimedtvshowsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
