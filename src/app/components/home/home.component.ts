import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { FooterComponent } from "../footer/footer.component";
import { BenefitCardComponent } from "../benefit-card/benefit-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home-responsive.component.css'],
    imports: [HeaderComponent, NgOptimizedImage, ButtonPrimaryComponent, NewsletterFormComponent, FooterComponent, BenefitCardComponent]
})
export class HomeComponent {

}
