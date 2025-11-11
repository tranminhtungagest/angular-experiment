import { Component, OnInit } from '@angular/core';
import { ControlDataService } from './data/control-data.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ import this
import { CommonModule } from '@angular/common'; // ✅ import this

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [FormsModule, CommonModule],
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

  constructor(private controlData: ControlDataService) {}

  ngOnInit() {
    this.frameworks = this.controlData.getFrameworks();
    this.components = this.controlData.getComponents();
    // Preload first component’s controls
    this.onComponentChange(this.components[0]);
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
  }
}
