import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [NgIf, FormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: string = ''; // For storing the input email
  emailSent: boolean = false; // Tracks whether the email was sent successfully

  onSubmit() {
    // Add logic for sending the email
    if (this.email) {
      console.log('Email submitted:', this.email);
      this.emailSent = true; // Simulate email sent
    }
  }
}
