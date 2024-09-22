import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-stapper-experiece',
  templateUrl: './stapper-experiece.component.html',
  styleUrl: './stapper-experiece.component.css'
})
export class StapperExperieceComponent{

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
