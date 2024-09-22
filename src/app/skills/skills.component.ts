import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

   Skills: string[] = ['ANGULAR', 'HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'EXPRESS', 'MONGODB', 'MYSQL', 'REST APIs', 
    'API INTERGARTION', 'POSTMAN', 'APPDYNAMICS', 'SPLUNK', 'JIRA'];

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const cards = document.querySelectorAll('.card');
  
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowBottom = windowHeight - 100; // Adjust this value based on when you want the animation to trigger
        
        // If the card is entering the viewport
        if (rect.top <= windowBottom && rect.bottom >= 0) {
          card.classList.add('is-visible');
          card.classList.remove('is-hidden');
        } 
        // If the card is leaving the viewport
        else {
          card.classList.add('is-hidden');
          card.classList.remove('is-visible');
        }
      });
    }

}
