import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = 'en';

  constructor() {
    // Detect language based on URL prefix at startup
    const path = window.location.pathname;
    if (path.startsWith('/ja')) {
      this.currentLang = 'ja';
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ja' : 'en';
    const prefix = this.getLangPrefix();
    const newUrl = window.location.pathname.replace(/^\/(ja\/)?/, prefix ? `/${prefix}/` : '/');
    window.location.href = newUrl;
  }

  getLangPrefix(): string {
    return this.currentLang === 'ja' ? 'ja' : '';
  }
}
