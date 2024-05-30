import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FactService } from '../services/facts.service';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.scss',
})
export class FactsComponent {
  facts: any;

  constructor(private factService: FactService) {}

  ngOnInit(): void {
    this.fetchFacts();
  }

  fetchFacts(): void {
    const count = Math.floor(Math.random() * 10) + 1;
    this.factService
      .getFacts(count)
      .subscribe((data: any) => (this.facts = data.data));
  }
}
