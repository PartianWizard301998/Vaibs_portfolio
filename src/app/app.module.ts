import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import {MatIconModule} from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfessionalexperiencesComponent } from './professionalexperiences/professionalexperiences.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { StapperExperieceComponent } from './stapper-experiece/stapper-experiece.component';
import { MatStepperModule } from '@angular/material/stepper';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    ProfessionalexperiencesComponent,
    SayHelloComponent,
    StapperExperieceComponent,
    EducationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    NgxTypedJsModule,
    MatIconModule,
    MatStepperModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
