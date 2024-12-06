import { Component } from '@angular/core';
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from "./section-2/section-2.component";

@Component({
  selector: 'app-tokens',
  standalone: true,
  imports: [Section1Component, Section2Component],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.css'
})
export class TokensComponent {

}
