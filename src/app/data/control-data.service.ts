import { Injectable } from '@angular/core';

type ComponentGroups =
  | 'CommonControls'
  | 'Layout'
  | 'Navigate'
  | 'Media'
  | 'Utilities'
  | 'Scenarios';

@Injectable({
  providedIn: 'root',
})
export class ControlDataService {
  private data: {
    frameworks: string[];
    components: Record<ComponentGroups, string[]>;
  } = {
    frameworks: ['NextJS', 'Angular', 'React', 'Vue'],
    components: {
      CommonControls: [
        'Address',
        'Area',
        'Canvas',
        'Command',
        'DataList',
        'Details',
        'FigCaption',
        'Iframe',
        'Image',
        'InputButton',
        'InputCheckBox',
        'InputColor',
        'InputDate',
        'InputEmail',
        'Label',
        'Map',
        'MessageBox',
        'Meter',
        'Output',
        'Progress',
        'Select',
        'Table',
        'TextArea',
        'TimeTag',
      ],
      Layout: [
        'Div',
        'Section',
        'Article',
        'Aside',
        'Header',
        'Footer',
        'P',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'Span',
        'Strong',
      ],
      Navigate: ['Nav', 'A'],
      Media: ['Audio', 'Video', 'Source', 'Embed'],
      Utilities: ['Cookie', 'TimingObject', 'ObjectWait', 'WindowWait'],
      Scenarios: ['ScenarioControls', 'ScenarioEvents', 'ScenarioViewer'],
    },
  };

  getFrameworks() {
    return this.data.frameworks;
  }

  getComponents(): ComponentGroups[] {
    return Object.keys(this.data.components) as ComponentGroups[];
  }

  getControls(component: ComponentGroups): string[] {
    return this.data.components[component];
  }
}
