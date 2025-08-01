import { Component } from '@angular/core';
import { TruncatePipe } from "../pipes/truncate-pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advantages',
  standalone: true,
  template: `
    <section class="big-macaroons">
      <div class="container">
        <div class="big-macaroons-top">
          <div class="big-macaroons-left">
            <h2 class="big-macaroons-left-title">{{ titleText }}</h2>
            <p class="big-macaroons-left-desc">{{ descriptionText | truncate:95 }}</p>
          </div>
          <div class="big-macaroons-right">
            <img [src]="imageUrl" [alt]="imageAlt">
          </div>
        </div>
        <div class="big-macaroons-bottom">
          <div class="big-macaroon-bottom" *ngFor="let advantage of advantages">
            <div class="big-macaroon-bottom-number">{{ advantage.id }}</div>
            <div class="big-macaroon-bottom-title">{{ advantage.title }}</div>
            <div class="big-macaroon-bottom-description">
              {{ advantage.description | truncate:95:true }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [TruncatePipe, CommonModule],
})
export class AdvantagesComponent {
  titleText = 'Мы печём для вас вкуснейшие макаруны уже более 10 лет';
  descriptionText = 'Все пироженки мы готовим только из натуральных и качественных продуктов, без консервантов, ароматизаторов, красителей. Используем в приготовлении сливочное масло 82,5%, без дрожжей, маргарина, разрыхлителей и улучшителей муки.';
  imageUrl = 'images/macaroons-big.png';
  imageAlt = 'Big macaroon';

  advantages = [
    {
      id: 1,
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      id: 2,
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      id: 3,
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      id: 4,
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];
}
