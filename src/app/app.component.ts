import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { Content2Component } from "./content2/content2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, ContentComponent, FooterComponent, Content2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingPage';
}
