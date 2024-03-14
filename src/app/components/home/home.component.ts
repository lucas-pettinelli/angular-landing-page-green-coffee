import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home-responsive.component.css'],
    imports: [HeaderComponent, NgOptimizedImage]
})
export class HomeComponent {

}
