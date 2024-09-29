import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }




  onSubmit(){
    if(this.contactForm.valid){
      this.http.post('http://localhost:3000/send-email',this.contactForm.value).subscribe(response =>{
        alert("Email sent Successfully.");
      }, error =>{
        alert("Something went Wrong.");
      })
      this.contactForm.reset();
    }
  }

 

}
