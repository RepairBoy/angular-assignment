import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../../pages/home/home.component";
import { NavbarComponent } from "../../ui/navbar/navbar.component";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  
}
