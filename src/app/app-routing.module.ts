import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfessionalexperiencesComponent } from './professionalexperiences/professionalexperiences.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Contact', component:ContactComponent},
  {path:'myworks', component:ProjectsComponent},
  {path:'experiences', component:ProfessionalexperiencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
