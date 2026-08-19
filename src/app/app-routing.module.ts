import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OnlyonnetflixComponent } from './NavigatingComponents/onlyonnetflix/onlyonnetflix.component';
import { WaystowatchComponent } from './NavigatingComponents/waystowatch/waystowatch.component';
import { SpeedtestComponent as PrivacyComponent } from './NavigatingComponents/speedtest/speedtest.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'onlyonnetflix',component:OnlyonnetflixComponent},
  {path:'Waystowatch',component:WaystowatchComponent},
  {path:'speedtest',component:PrivacyComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
