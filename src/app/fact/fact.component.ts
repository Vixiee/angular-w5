import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FactService } from '../services/facts.service';
@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.scss',
})
export class FactComponent implements OnInit {
  fact: any;

  ngOnInit(): void {
    this.fetchFact();
  }

  constructor(private factService: FactService) {}

  fetchFact(): void {
    this.factService
      .getFact()
      .subscribe((data: any) => (this.fact = data.data));
  }
}
