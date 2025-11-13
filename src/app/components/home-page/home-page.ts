import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../locale/language.service';
import { ControlDataService } from '../../data/control-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
})
export class HomePage implements OnInit {
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
    public languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.frameworks = this.controlData.getFrameworks();
    this.components = this.controlData.getComponents();
  }

  onFrameworkChange(value: string) {
    this.selectedFramework = value;
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
    const prefix = this.languageService.getLangPrefix();
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
    this.translate.use(this.languageService.currentLang);
  }
}
