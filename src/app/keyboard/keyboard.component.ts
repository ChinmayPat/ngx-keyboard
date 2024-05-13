import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { DefaultLayoutTypes, LAYOUTS } from './model/keyboard.model';

@Component({
  selector: 'keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class KeyboardComponent {
  @Input() set layoutName(name: DefaultLayoutTypes) {
    this.setKeyboardLayout(LAYOUTS[name]);
  }

  @Input() set layoutKeys(keys: string[]) {
    this.setKeyboardLayout(keys);
  }

  @Output() keyPressed = new EventEmitter<string>();

  protected layout = signal<string[]>([]);

  private setKeyboardLayout(keys: string[]) {
    this.layout.set(keys);
  }

  protected parseRow(row: string): string[] {
    return row.split(' ');
  }

  onKeyPress(key: string) {
    this.keyPressed.emit(key);
  }
}
