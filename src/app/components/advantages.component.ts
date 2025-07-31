import { Component } from '@angular/core';
import { TruncatePipe } from "../pipes/truncate-pipe";

@Component({
  selector: 'app-advantages',
  standalone: true,
  template: `
    <section class="big-macaroons">
      <div class="container">
        <div class="big-macaroons-top">
          <div class="big-macaroons-left">
            <h2 class="big-macaroons-left-title">Мы печём для вас вкуснейшие макаруны уже более 10 лет</h2>
            <p class="big-macaroons-left-desc">Все пироженки мы готовим только из натуральных и качественных продуктов...</p>
          </div>
          <div class="big-macaroons-right">
            <img src="images/macaroons-big.png" alt="Big macaroon">
          </div>
        </div>
        <div class="big-macaroons-bottom">
          <div class="big-macaroon-bottom" *ngFor="let advantage of advantages">
            <div class="big-macaroon-bottom-number">{{ advantage.id }}</div>
            <div class="big-macaroon-bottom-title">{{ advantage.title }}</div>
            <div class="big-macaroon-bottom-description">{{ advantage.description | truncate }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [TruncatePipe]
})
export class AdvantagesComponent {
  advantages = [
    { id: 1, title: 'Лучшие продукты', description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов...' },
    { id: 2, title: 'Много вкусов', description: 'Наша задача – предоставить вам широкое разнобразие вкусов...' },
    { id: 3, title: 'Бисквитное тесто', description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%...' },
    { id: 4, title: 'Честный продукт', description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии...' }
  ];
}
