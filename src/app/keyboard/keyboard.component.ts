import {
  Component,
  Input,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { DefaultLayoutTypes, LAYOUTS, Layout } from './model/keyboard.model';

@Component({
  selector: 'keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.less',
  encapsulation: ViewEncapsulation.None,
  exportAs: 'keyboard',
})
export class KeyboardComponent {
  @Input() set layoutName(name: DefaultLayoutTypes) {
    this.setKeyboardLayout(LAYOUTS[name]);
  }

  @Input() set layoutKeys(keys: Layout) {
    this.setKeyboardLayout(keys);
  }

  protected layout = signal<Layout>([]);

  setKeyboardLayout(keys: Layout) {
    this.layout.set(keys);
  }

  parseRow(row: string): string[] {
    return row.split(' ');
  }
}
