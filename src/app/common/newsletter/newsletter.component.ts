import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], // Include ReactiveFormsModule here
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  newsLetterImg = 'assets/home/newsletter-img.png';
  xIcon = 'assets/icon/x.svg';
  facebookIcon = 'assets/icon/facebook.svg';
  instagramIcon = 'assets/icon/instagram.svg';
  linkedinIcon = 'assets/icon/linkedin.svg';
  youtubeIcon = 'assets/icon/youtube.svg';

  FormData: FormGroup;
  submitted = false;
  isSubmitting = false;
  isSuccess = false;
  isError = false;

  constructor(private formBuilder: FormBuilder) {
    this.FormData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
    });
  }

  // Form submission handler
  onSubmit(): void {
    this.submitted = true;
    this.isError = false;
    this.isSuccess = false;

    // If form is invalid, return early
    if (this.FormData.invalid) {
      return;
    }

    this.isSubmitting = true;

    const templateParams = {
      from_email: this.FormData.value.email, // Get email from form
      message: 'Thank you for subscribing to our newsletter!', // Optional custom message
    };

    console.log(templateParams); // Check if data is correct before sending

    emailjs
      .send(
        'service_tj6xndc', // Replace with your EmailJS Service ID
        'template_7kqcyw7', // Replace with your EmailJS Template ID
        templateParams,
        'bgk0Lnz7sDSh07-wX' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          this.isSubmitting = false;
          this.isSuccess = true;
          this.FormData.reset();
          this.submitted = false;
        },
        (error) => {
          console.error('EmailJS Error:', error);
          this.isSubmitting = false;
          this.isError = true;
        }
      );
  }

  // Helper method to check if the email is valid
  get email() {
    return this.FormData.get('email');
  }
}
