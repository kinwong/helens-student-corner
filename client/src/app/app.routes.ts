import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PracticeComponent } from './practice/practice.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters { }
