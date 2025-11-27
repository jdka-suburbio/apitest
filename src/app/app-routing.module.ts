import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ConcursoComponent } from './components/pages/concurso/concurso.component';
import { SpacexComponent } from './components/pages/spacex/spacex.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contest', component: ConcursoComponent},
  {path: 'spacex', component: SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
