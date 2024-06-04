import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent {

  userForm: FormGroup; // उपयोगकर्ता फॉर्म को नियंत्रित करता है
  isFormSubmitted: boolean = false; // फॉर्म सबमिट होने की स्थिति को ट्रैक करता है
  isEmailSent: boolean = false; // ईमेल भेजने की स्थिति को ट्रैक करता है

  constructor() {
    // फॉर्म ग्रुप की परिभाषा
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]), // नाम के लिए वैलिडेशन
      email: new FormControl("", [Validators.required, Validators.email]), // ईमेल के लिए वैलिडेशन
      message: new FormControl("", [Validators.required]) // संदेश के लिए वैलिडेशन
    });
  }

  onSubmit() {
    this.isFormSubmitted = true; // फॉर्म सबमिट होने की स्थिति सेट करता है
    if (this.userForm.valid) {
      const { name, email, message } = this.userForm.value; // फॉर्म के मान प्राप्त करता है
      emailjs.send('service_qxjohb7', 'template_bf69g8p', {
        name: name,
        email: email,
        message: message,
      }, 'xRCirwpwdkYd4oiLn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text); // सफल संदेश लॉग करता है
        this.isEmailSent = true; // ईमेल भेजने की स्थिति सेट करता है
      }, (err) => {
        console.log('FAILED...', err); // विफलता संदेश लॉग करता है
        this.isEmailSent = false; // ईमेल भेजने की विफलता स्थिति सेट करता है
      });
    } else {
      console.log("Please fill out the form correctly."); // फॉर्म में त्रुटि होने पर संदेश
    }
  }
}
