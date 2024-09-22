import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Console, log } from 'console';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  @ViewChild(NgxTypedJsComponent)
  typed!: NgxTypedJsComponent;

  constructor(private http:HttpClient){}

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