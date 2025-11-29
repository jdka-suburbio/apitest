import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ConcursoComponent } from './components/pages/concurso/concurso.component';
import { SpacexComponent } from './components/pages/spacex/spacex.component';
import { FirebaseComponent } from './components/pages/firebase/firebase.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contest', component: ConcursoComponent},
  {path: 'spacex', component: SpacexComponent},
  {path: 'firebase', component: FirebaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
