import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  // templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
    <app-header />
    <app-home />
    <br />
    <!-- <hr /> -->
    <div class="grid grid-cols-4 border-2 border-solid border-red-800">
      <!-- framework selection goes here -->
      <div class="text-center border-2 border-solid">
        <label for="frameworkSelector">Framework</label>
        <br />
        <select name="" id="frameworkSelector" class="border-solid">
          <option value="NextJS">NextJS</option>
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
      </div>

      <!-- Components -->
      <div class="text-center">
        <label for="componentSelector">Components</label>
        <br />
        <select name="" id="componentSelector">
          <option value="CommonControls">Common Controls</option>
          <option value="Layout">Layout</option>
          <option value="Navigate">Navigate</option>
          <option value="Media">Media</option>
          <option value="Utilities">Utilities</option>
          <option value="Scenarios">Scenarios</option>
        </select>
      </div>

      <!-- Controls -->
      <div class="text-center">
        <label for="controlSelector">Controls</label>
        <br />
        <select name="" id="controlSelector">
          <option value="Address">Address</option>
          <option value="Area">Area</option>
          <option value="Canvas">Canvas</option>
          <option value="Command">Command</option>
          <option value="DataList">Data List</option>
          <option value="Details">Details</option>
          <option value="FigCaption">Fig Caption</option>
          <option value="Iframe">Iframe</option>
          <option value="Image">Image</option>
          <option value="InputButton">Input Button</option>
          <option value="InputCheckBox">Input Checkbox</option>
          <option value="InputColor">Input Color</option>
          <option value="InputDate">Input Date</option>
          <option value="InputDatetime">Input Datetime</option>
          <option value="InputDatetimeLocal">Input Datetime Local</option>
          <option value="InputEmail">Input Email</option>
          <option value="InputFile">Input File</option>
          <option value="InputImage">Input Image</option>
          <option value="InputMonth">Input Month</option>
          <option value="InputNumber">Input Number</option>
          <option value="InputPassword">Input Password</option>
          <option value="InputRadio">Input Radio</option>
          <option value="InputRange">Input Range</option>
          <option value="InputReset">Input Reset</option>
          <option value="InputSearch">Input Search</option>
          <option value="InputSubmit">InputSubmit</option>
          <option value="InputTel">Input Telephone</option>
          <option value="InputText">Input Text</option>
          <option value="InputTime">Input Time</option>
          <option value="InputURL">Input URL</option>
          <option value="InputWeek">Input Week</option>
          <option value="Keygen">Keygen</option>
          <option value="Label">Label</option>
          <option value="Label">Label</option>
          <option value="Map">Map</option>
          <option value="MessageBox">Message Box</option>
          <option value="Meter">Meter</option>
          <option value="Nav">Nav</option>
          <option value="Output">Output</option>
          <option value="Progress">Progress</option>
          <option value="ScrollBar">Scroll Bar</option>
          <option value="Select">Select</option>
          <option value="Summary">Summary</option>
          <option value="SVG">SVG</option>
          <option value="Table">Table</option>
          <option value="Image">Image</option>
          <option value="TextArea">Text Area</option>
          <option value="TimeTag">Time Tag</option>
          <!-- end of common controls + start of layout below this line -->
          <option value="A">A</option>
          <option value="Abbr">Abbr</option>
          <option value="Article">Article</option>
          <option value="Aside">Aside</option>
          <option value="Bdi">Bdi</option>
          <option value="Blockquote">Blockquote</option>
          <option value="Cite">Cite</option>
          <option value="Code">Code</option>
          <option value="Dd">Dd</option>
          <option value="Del">Del</option>
          <option value="Dfn">Dfn</option>
          <option value="Div">Div</option>
          <option value="Dl">Dl</option>
          <option value="Dt">Dt</option>
          <option value="Em">Em</option>
          <option value="Embed">Embed</option>
          <option value="Fieldset">Fieldset</option>
          <option value="Footer">Footer</option>
          <option value="Frame">Frame</option>
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="H3">H3</option>
          <option value="H4">H4</option>
          <option value="H5">H5</option>
          <option value="H6">H6</option>
          <option value="Header">Header</option>
          <option value="Hgroup">Hgroup</option>
          <option value="Ins">Ins</option>
          <option value="Label">Label</option>
          <option value="Legend">Legend</option>
          <option value="Li">Li</option>
          <option value="Mark">Mark</option>
          <option value="Object">Object</option>
          <option value="Ol">Ol</option>
          <option value="P">P</option>
          <option value="Pre">Pre</option>
          <option value="Q">Q</option>
          <option value="Rp">Rp</option>
          <option value="Rt">Rt</option>
          <option value="Ruby">Ruby</option>
          <option value="Samp">Samp</option>
          <option value="Section">Section</option>
          <option value="Small">Small</option>
          <option value="Strong">Strong</option>
          <option value="Td">Td</option>
          <option value="Th">Th</option>
          <option value="Ul">Ul</option>
          <option value="Var">Var</option>
          <option value="Wbr">Wbr</option>
          <option value="kbd">kbd</option>
          <option value="span">span</option>
          <option value="sub">sub</option>
          <option value="sup">sup</option>
          <!-- end of layout + start of navigate below this line -->
          <option value="Navigate">Navigate</option>
          <!-- end of navigate + start of media below this line -->
          <option value="Audio">Audio</option>
          <option value="CustomizeVideo">Customize Video</option>
          <option value="Embed">Embed</option>
          <option value="Source">Source</option>
          <option value="Video">Video</option>
          <!-- end of media + start of utilities -->
          <option value="Cookie">Cookie</option>
          <option value="ObjectWait">Object Wait</option>
          <option value="TimingObject">Timing Object</option>
          <option value="WindowWait">Window Wait</option>
          <!-- end of utilities + start of scenarios -->
          <option value="ScenarioControls">Scenario Controls</option>
          <option value="ScenarioEvents">Scenario Events</option>
          <option value="ScenarioViewer">Scenario Viewer</option>
        </select>
      </div>

      <!-- Case / scenario -->
      <div class="text-center">
        <label for="sampleSelector">Sample</label>
        <br />
        <select name="" id="sampleSelector">
          <option value="Address_Sample">Address Sample</option>
          <option value="Area_Sample">Area Sample</option>
          <option value="Canvas_Sample">Canvas Sample</option>
          <option value="Command_Sample">Command Sample</option>
          <option value="DataList_Sample">Data List Sample</option>
          <option value="Details_Sample">Details Sample</option>
          <option value="FigCaption_Sample">Fig Caption Sample</option>
          <option value="Iframe_Sample">Iframe Sample</option>
          <option value="Image_Sample">Image Sample</option>
          <option value="InputButton_Sample">Input Button Sample</option>
          <option value="InputCheckBox_Sample">Input Checkbox Sample</option>
          <option value="InputColor_Sample">Input Color Sample</option>
          <option value="InputDate_Sample">Input Date Sample</option>
          <option value="InputDatetime_Sample">Input Datetime Sample</option>
          <option value="InputDatetimeLocal_Sample">Input Datetime Local Sample</option>
          <option value="InputEmail_Sample">Input Email Sample</option>
          <option value="InputFile_Sample">Input File Sample</option>
          <option value="InputImage_Sample">Input Image Sample</option>
          <option value="InputMonth_Sample">Input Month Sample</option>
          <option value="InputNumber_Sample">Input Number Sample</option>
          <option value="InputPassword_Sample">Input Password Sample</option>
          <option value="InputRadio_Sample">Input Radio Sample</option>
          <option value="InputRange_Sample">Input Range Sample</option>
          <option value="InputReset_Sample">Input Reset Sample</option>
          <option value="InputSearch_Sample">Input Search Sample</option>
          <option value="InputSubmit_Sample">InputSubmit Sample</option>
          <option value="InputTel_Sample">Input Telephone Sample</option>
          <option value="InputText_Sample">Input Text Sample</option>
          <option value="InputTime_Sample">Input Time Sample</option>
          <option value="InputURL_Sample">Input URL Sample</option>
          <option value="InputWeek_Sample">Input Week Sample</option>
          <option value="Keygen_Sample">Keygen Sample</option>
          <option value="Label_Sample">Label Sample</option>
          <option value="Label_Sample">Label Sample</option>
          <option value="Map_Sample">Map Sample</option>
          <option value="MessageBox_Sample">Message Box Sample</option>
          <option value="Meter_Sample">Meter Sample</option>
          <option value="Nav_Sample">Nav Sample</option>
          <option value="Output_Sample">Output Sample</option>
          <option value="Progress_Sample">Progress Sample</option>
          <option value="ScrollBar_Sample">Scroll Bar Sample</option>
          <option value="Select_Sample">Select Sample</option>
          <option value="Summary_Sample">Summary Sample</option>
          <option value="SVG_Sample">SVG Sample</option>
          <option value="Table_Sample">Table Sample</option>
          <option value="Image_Sample">Image Sample</option>
          <option value="TextArea_Sample">Text Area Sample</option>
          <option value="TimeTag_Sample">Time Tag Sample</option>
          <!-- end of common controls + start of layout below this line -->
          <option value="A_Sample">A Sample</option>
          <option value="Abbr_Sample">Abbr Sample</option>
          <option value="Article_Sample">Article Sample</option>
          <option value="Aside_Sample">Aside Sample</option>
          <option value="Bdi_Sample">Bdi Sample</option>
          <option value="Blockquote_Sample">Blockquote Sample</option>
          <option value="Cite_Sample">Cite Sample</option>
          <option value="Code_Sample">Code Sample</option>
          <option value="Dd_Sample">Dd Sample</option>
          <option value="Del_Sample">Del Sample</option>
          <option value="Dfn_Sample">Dfn Sample</option>
          <option value="Div_Sample">Div Sample</option>
          <option value="Dl_Sample">Dl Sample</option>
          <option value="Dt_Sample">Dt Sample</option>
          <option value="Em_Sample">Em Sample</option>
          <option value="Embed_Sample">Embed Sample</option>
          <option value="Fieldset_Sample">Fieldset Sample</option>
          <option value="Footer_Sample">Footer Sample</option>
          <option value="Frame_Sample">Frame Sample</option>
          <option value="H1_Sample">H1 Sample</option>
          <option value="H2_Sample">H2 Sample</option>
          <option value="H3_Sample">H3 Sample</option>
          <option value="H4_Sample">H4 Sample</option>
          <option value="H5_Sample">H5 Sample</option>
          <option value="H6_Sample">H6 Sample</option>
          <option value="Header_Sample">Header Sample</option>
          <option value="Hgroup_Sample">Hgroup Sample</option>
          <option value="Ins_Sample">Ins Sample</option>
          <option value="Label_Sample">Label Sample</option>
          <option value="Legend_Sample">Legend Sample</option>
          <option value="Li_Sample">Li Sample</option>
          <option value="Mark_Sample">Mark Sample</option>
          <option value="Object_Sample">Object Sample</option>
          <option value="Ol_Sample">Ol Sample</option>
          <option value="P_Sample">P Sample</option>
          <option value="Pre_Sample">Pre Sample</option>
          <option value="Q_Sample">Q Sample</option>
          <option value="Rp_Sample">Rp Sample</option>
          <option value="Rt_Sample">Rt Sample</option>
          <option value="Ruby_Sample">Ruby Sample</option>
          <option value="Samp_Sample">Samp Sample</option>
          <option value="Section_Sample">Section Sample</option>
          <option value="Small_Sample">Small Sample</option>
          <option value="Strong_Sample">Strong Sample</option>
          <option value="Td_Sample">Td Sample</option>
          <option value="Th_Sample">Th Sample</option>
          <option value="Ul_Sample">Ul Sample</option>
          <option value="Var_Sample">Var Sample</option>
          <option value="Wbr_Sample">Wbr Sample</option>
          <option value="kbd_Sample">kbd Sample</option>
          <option value="span_Sample">span Sample</option>
          <option value="sub_Sample">sub Sample</option>
          <option value="sup_Sample">sup Sample</option>
          <!-- end of layout + start of navigate below this line -->
          <option value="Navigate_Sample">Navigate Sample</option>
          <!-- end of navigate + start of media below this line -->
          <option value="Audio_Sample">Audio Sample</option>
          <option value="CustomizeVideo_Sample">Customize Video Sample</option>
          <option value="Embed_Sample">Embed Sample</option>
          <option value="Source_Sample">Source Sample</option>
          <option value="Video_Sample">Video Sample</option>
          <!-- end of media + start of utilities -->
          <option value="Cookie_Sample">Cookie Sample</option>
          <option value="ObjectWait_Sample">Object Wait Sample</option>
          <option value="TimingObject_Sample">Timing Object Sample</option>
          <option value="WindowWait_Sample">Window Wait Sample</option>
          <!-- end of utilities + start of scenarios -->
          <option value="ScenarioControls_Sample">Scenario Controls Sample</option>
          <option value="ScenarioEvents_Sample">Scenario Events Sample</option>
          <option value="ScenarioViewer_Sample">Scenario Viewer Sample</option>
        </select>
      </div>
    </div>

    <!-- for experimentation -->
    <a
      href="#"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </a>

    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Default
    </button>
    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Alternative
    </button>
    <button
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      Dark
    </button>
    <button
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      Light
    </button>
    <button
      type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Green
    </button>
    <button
      type="button"
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Red
    </button>
    <button
      type="button"
      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Yellow
    </button>
    <button
      type="button"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      Purple
    </button>
  `,
})
export class App {
  protected readonly title = signal('angular-experiment');
  protected readonly myName = signal('Alex');
}
