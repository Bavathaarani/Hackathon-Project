import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './chatbot/profile/profile.component';
import { CourseComponent } from './chatbot/course/course.component';
import { PaymentComponent } from './chatbot/payment/payment.component';
import { DocumentComponent } from './chatbot/document/document.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path: 'chatbot', component: ChatbotComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course', component: CourseComponent },
  {path: 'payment', component: PaymentComponent },
  {path: 'document', component: DocumentComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
