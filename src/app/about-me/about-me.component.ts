import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {

  @ViewChild(NgxTypedJsComponent)
  typed!: NgxTypedJsComponent;

 
  constructor(private http:HttpClient){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutme = document.querySelectorAll('.aboutme');

    aboutme.forEach((aboutme: any) => {
      const rect = aboutme.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowBottom = windowHeight - 100; // Adjust this value based on when you want the animation to trigger
      
      // If the card is entering the viewport
      if (rect.top <= windowBottom && rect.bottom >= 0) {
        aboutme.classList.add('is-visible');
        aboutme.classList.remove('is-hidden');
      } 
      // If the card is leaving the viewport
      else {
        aboutme.classList.add('is-hidden');
        aboutme.classList.remove('is-visible');
      }
    });
  }

  DownLoadResume() {
    
    const cvUrl = '../../assets/resume.pdf';

    this.http.get(cvUrl, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' }); // Adjust the MIME type as per your file type
      const url = window.URL.createObjectURL(blob);

       // Create anchor element and set attributes to trigger download
       const a = document.createElement('a');
       a.href = url;
       a.download = 'Vaibhav_Bhute_Resume.pdf'; // File name
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       window.URL.revokeObjectURL(url);
     }, error => {
       console.error('Error downloading the CV', error);
     });


    }

}
