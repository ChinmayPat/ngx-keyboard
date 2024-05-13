import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DefaultLayoutTypes } from './keyboard/model/keyboard.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'ngx-keyboard';
  layout: DefaultLayoutTypes = 'default';

  @ViewChild('inputField') inputElement!: ElementRef;

  toggle() {
    this.layout = this.layout === 'default' ? 'numpad' : 'default';
  }

  handleKeyPress(key: string) {
    console.log(key);
    this.inputElement.nativeElement.value += key;
  }
}
