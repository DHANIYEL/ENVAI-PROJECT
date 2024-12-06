import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { InvestComponent } from "./pages/investment/invest/invest.component";
import { TokensComponent } from "./pages/tokens/tokens.component";
import { InvestmentComponent } from "./pages/investment/investment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TokensComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected property name to 'styleUrls'
})
export class AppComponent {
  title = 'ENVAI-PROJECT';
}
