import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUser = faUser;
}

//   faMoneyBillTransfer = faMoneyBillTransfer;
//   faLaptopFile = faLaptopFile;
//   isCheckboxChecked: boolean = false;
//   constructor(private router: Router) {}
//   navigateToChatbot() {
//     if (this.isCheckboxChecked) {
//       this.router.navigate(['/chatbot']); 
//   }