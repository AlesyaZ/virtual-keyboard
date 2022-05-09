const keyNumberEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const keyNumberRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const keyNumberUpRu = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43];
const keyNumberUpEn = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43];
const keyEngLow = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
const keyRuLow = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92];
const keyEngUp = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124];
const keyRuUp = [1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47];
const keyEngLow1 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
const keyEngUp1 = [65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34];
const keyRuLow1 = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
const keyRuUp1 = [1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069];
const keyEngLow2 = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
const keyEngUp2 = [90, 88, 67, 86, 66, 78, 77, 60, 62, 63];
const keyRuLow2 = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
const keyRuUp2 = [1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44];
const codes = [
  'Backquote', 'Backquote', 'Backquote', 'Backquote',
  'Digit1', 'Digit1', 'Digit1', 'Digit1',
  'Digit2', 'Digit2', 'Digit2', 'Digit2',
  'Digit3', 'Digit3', 'Digit3', 'Digit3',
  'Digit4', 'Digit4', 'Digit4', 'Digit4',
  'Digit5', 'Digit5', 'Digit5', 'Digit5',
  'Digit6', 'Digit6', 'Digit6', 'Digit6',
  'Digit7', 'Digit7', 'Digit7', 'Digit7',
  'Digit8', 'Digit8', 'Digit8', 'Digit8',
  'Digit9', 'Digit9', 'Digit9', 'Digit9',
  'Digit0', 'Digit0', 'Digit0', 'Digit0',
  'Minus', 'Minus', 'Minus', 'Minus',
  'Equal', 'Equal', 'Equal', 'Equal',
  'Backspace', 'Tab',
  'KeyQ', 'KeyQ', 'KeyQ', 'KeyQ',
  'KeyW', 'KeyW', 'KeyW', 'KeyW',
  'KeyE', 'KeyE', 'KeyE', 'KeyE',
  'KeyR', 'KeyR', 'KeyR', 'KeyR',
  'KeyT', 'KeyT', 'KeyT', 'KeyT',
  'KeyY', 'KeyY', 'KeyY', 'KeyY',
  'KeyU', 'KeyU', 'KeyU', 'KeyU',
  'KeyI', 'KeyI', 'KeyI', 'KeyI',
  'KeyO', 'KeyO', 'KeyO', 'KeyO',
  'KeyP', 'KeyP', 'KeyP', 'KeyP',
  'BracketLeft', 'BracketLeft', 'BracketLeft', 'BracketLeft',
  'BracketRight', 'BracketRight', 'BracketRight', 'BracketRight',
  'Backslash', 'Backslash', 'Backslash', 'Backslash', 'Delete',
  'CapsLock',
  'KeyA', 'KeyA', 'KeyA', 'KeyA',
  'KeyS', 'KeyS', 'KeyS', 'KeyS',
  'KeyD', 'KeyD', 'KeyD', 'KeyD',
  'KeyF', 'KeyF', 'KeyF', 'KeyF',
  'KeyG', 'KeyG', 'KeyG', 'KeyG',
  'KeyH', 'KeyH', 'KeyH', 'KeyH',
  'KeyJ', 'KeyJ', 'KeyJ', 'KeyJ',
  'KeyK', 'KeyK', 'KeyK', 'KeyK',
  'KeyL', 'KeyL', 'KeyL', 'KeyL',
  'Semicolon', 'Semicolon', 'Semicolon', 'Semicolon',
  'Quote', 'Quote', 'Quote', 'Quote',
  'Enter', 'ShiftLeft',
  'KeyZ', 'KeyZ', 'KeyZ', 'KeyZ',
  'KeyX', 'KeyX', 'KeyX', 'KeyX',
  'KeyC', 'KeyC', 'KeyC', 'KeyC',
  'KeyV', 'KeyV', 'KeyV', 'KeyV',
  'KeyB', 'KeyB', 'KeyB', 'KeyB',
  'KeyN', 'KeyN', 'KeyN', 'KeyN',
  'KeyM', 'KeyM', 'KeyM', 'KeyM',
  'Comma', 'Comma', 'Comma', 'Comma',
  'Period', 'Period', 'Period', 'Period',
  'Slash', 'Slash', 'Slash', 'Slash',
  'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft',
  'AltLeft', 'Space',
  'AltRight',
  'ArrowLeft', 'ArrowDown', 'ArrowRight',
  'ControlRight',
];

export {
  keyNumberEn,
  keyNumberRu,
  keyNumberUpRu,
  keyNumberUpEn,
  keyEngLow,
  keyRuLow,
  keyEngUp,
  keyRuUp,
  keyEngLow1,
  keyEngUp1,
  keyRuLow1,
  keyRuUp1,
  keyEngLow2,
  keyEngUp2,
  keyRuLow2,
  keyRuUp2,
  codes,
};
