import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scenario-page',
  templateUrl: './scenario-page.html',
  styleUrl: './scenario-page.css',
  standalone: true,
  imports: [CommonModule, TranslateModule], // ✅ allow ngIf, ngFor, etc. + dynamic rendering translated content
})
export class ScenarioPage implements OnInit {
  framework = '';
  component = '';
  control = '';
  sample = '';

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.framework = params.get('framework') || '';
      this.component = params.get('component') || '';
      this.control = params.get('control') || '';
      this.sample = params.get('sample') || '';
    });
  }

  onButtonClick() {
    const message = this.translate.instant('YOU_HAVE_CLICKED_ME_SENPAI');
    alert(message);
  }
}
