export type DefaultLayoutTypes = 'numpad' | 'shift' | 'default';

export type Layout = string[];

export const LAYOUTS: Record<DefaultLayoutTypes, Layout> = {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    "{lock} a s d f g h j k l ; ' {enter}",
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}',
  ],
  numpad: ['1 2 3', '4 5 6', '7 8 9', '{shift} 0 _', '{bksp}'],
  shift: [
    '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M &lt; &gt; ? {shift}',
    '.com @ {space}',
  ],
};
