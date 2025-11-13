import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang: 'en' | 'ja' = 'en';

  constructor(private router: Router) {
    // detect from URL on app start
    if (this.router.url.startsWith('/ja')) this.currentLang = 'ja';
  }

  toggleLanguage() {
    if (this.currentLang === 'en') {
      this.currentLang = 'ja';
      this.router.navigateByUrl('/ja' + this.router.url);
    } else {
      this.currentLang = 'en';
      const newUrl = this.router.url.replace(/^\/ja/, '') || '/';
      this.router.navigateByUrl(newUrl);
    }
  }

  getLangPrefix() {
    return this.currentLang === 'ja' ? '/ja' : '';
  }
}
