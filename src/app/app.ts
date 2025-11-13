import { Component, OnInit } from '@angular/core';
import { ControlDataService } from './data/control-data.service';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from './locale/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [FormsModule, CommonModule, RouterOutlet],
  standalone: true,
})
export class App implements OnInit {
  frameworks: string[] = [];
  components: string[] = [];
  controls: string[] = [];
  samples: string[] = [];

  selectedFramework = '';
  selectedComponent = '';
  selectedControl = '';

  constructor(
    private controlData: ControlDataService,
    private router: Router,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.frameworks = this.controlData.getFrameworks();
    this.components = this.controlData.getComponents();
  }

  onFrameworkChange(value: string) {
    this.selectedFramework = value;
    // (if frameworks ever have unique components, handle here)
  }

  onComponentChange(value: string) {
    this.selectedComponent = value;
    this.controls = this.controlData.getControls(value as any);
    this.samples = [];
    this.selectedControl = '';
  }

  onControlChange(value: string) {
    this.selectedControl = value;
    this.samples = [`${value}_Sample`];

    // Determine prefix based on current language
    const prefix = this.languageService.getLangPrefix();
    // Build the path array correctly sans the preceding slash
    this.router.navigate([
      prefix,
      'scenario',
      this.selectedFramework,
      this.selectedComponent,
      this.selectedControl,
      this.samples[0],
    ]);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
