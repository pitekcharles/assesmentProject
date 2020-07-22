import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeatresComponent } from './components/featres/featres.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
    SliderComponent,
    FeatresComponent,
    PortfolioComponent,
    PricingComponent,
    AboutComponent,
    TestimonialComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
