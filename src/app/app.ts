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
    <br />
    <br />
    <hr />
    <app-home />
    <br />
    <br />
    <hr />
    <div>
      <!-- framework selection goes here -->
      <select name="" id="frameworkSelector">
        <option value="NextJS">NextJS</option>
        <option value="Angular">Angular</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
      </select>

      <!-- Components -->
      <select name="" id="componentSelector">
        <option value="CommonControls">Common Controls</option>
        <option value="Layout">Layout</option>
        <option value="Navigate">Navigate</option>
        <option value="Media">Media</option>
        <option value="Utilities">Utilities</option>
        <option value="Scenarios">Scenarios</option>
      </select>

      <!-- Controls -->
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
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
        <option value="Image">Image</option>
      </select>

      <!-- Case / scenario -->
      <select name="" id="">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
        <option value="I">I</option>
        <option value="J">J</option>
        <option value="K">K</option>
        <option value="L">L</option>
        <option value="M">M</option>
      </select>
    </div>
  `,
})
export class App {
  protected readonly title = signal('angular-experiment');
  protected readonly myName = signal('Alex');
}
