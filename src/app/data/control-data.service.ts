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
        'Button',
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
        'InputDatetime',
        'InputDatetimeLocal',
        'InputEmail',
        'InputFile',
        'InputImage',
        'InputMonth',
        'InputNumber',
        'InputPassword',
        'InputRadio',
        'InputRange',
        'InputReset',
        'InputSearch',
        'InputSubmit',
        'InputTel',
        'InputText',
        'InputTime',
        'InputURL',
        'InputWeek',
        'Keygen',
        'Label',
        'Map',
        'MessageBox',
        'Meter',
        'Nav',
        'Output',
        'Progress',
        'ScrollBar',
        'Select',
        'Summary',
        'SVG',
        'Table',
        'Image',
        'TextArea',
        'TimeTag',
      ],
      Layout: [
        'A',
        'Abbr',
        'Article',
        'Aside',
        'Bdi',
        'Blockquote',
        'Cite',
        'Code',
        'Dd',
        'Del',
        'Dfn',
        'Div',
        'Dl',
        'Dt',
        'Em',
        'Embed',
        'Fieldset',
        'Frame',
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
        'Hgroup',
        'Ins',
        'Legend',
        'Li',
        'Mark',
        'Object',
        'Ol',
        'P',
        'Pre',
        'Q',
        'Rp',
        'Rt',
        'Ruby',
        'Samp',
        'Section',
        'Small',
        'Strong',
        'Td',
        'Th',
        'Ul',
        'Var',
        'Wbr',
        'kbd',
        'Span',
        'Strong',
        'Sub',
        'Sup',
      ],
      Navigate: ['Nav', 'A'],
      Media: ['Audio', 'CustomizeVideo', 'Video', 'Source', 'Embed'],
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
