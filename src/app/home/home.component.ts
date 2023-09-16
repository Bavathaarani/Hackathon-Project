import { Component } from '@angular/core';
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faMoneyBillTransfer = faMoneyBillTransfer;
  faLaptopFile = faLaptopFile;
  isCheckboxChecked: boolean = false;
  constructor(private router: Router) {}
  navigateToProfile() {
    if (this.isCheckboxChecked) {
      this.router.navigate(['/profile']); // Navigate to the Chatbot component
    }
  }
}
