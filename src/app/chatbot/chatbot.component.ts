import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
}
)
export class ChatbotComponent {
  activeImage: string | null = null;
  rupee = '../../assets/images/indian-rupee-sign-solid.svg'

  setActiveImage(imageName: string) {
    this.activeImage = imageName;
  }
  constructor(private router: Router) {}

navigateToProfile() {
  // Use the router to navigate to the 'profile' route
  this.router.navigate(['/profile']);
}

go_to_course(){
  this.router.navigate(['/course']);
}
}
