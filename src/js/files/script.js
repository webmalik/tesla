// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import * as wm from './wmFunctions.js';

wm.menu();
wm.timer();
window.addEventListener('load', function (e) {
    wm.reviewsSlider();
});
