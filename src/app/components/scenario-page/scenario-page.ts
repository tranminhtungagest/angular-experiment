import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scenario-page',
  templateUrl: './scenario-page.html',
  styleUrl: './scenario-page.css',
  standalone: true,
  imports: [CommonModule], // ✅ allow ngIf, ngFor, etc.
})
export class ScenarioPage implements OnInit {
  framework = '';
  component = '';
  control = '';
  sample = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.framework = params.get('framework') || '';
      this.component = params.get('component') || '';
      this.control = params.get('control') || '';
      this.sample = params.get('sample') || '';
    });
  }
}
