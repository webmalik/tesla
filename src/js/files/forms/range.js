// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
    const priceSlider = document.querySelector('#range');
    const toVal = document.querySelector('.form__to span');
    const fromVal = document.querySelector('.form__from span');

    if (priceSlider) {
        let textFrom = parseInt(priceSlider.getAttribute('data-from'));
        let textTo = parseInt(priceSlider.getAttribute('data-to'));
        noUiSlider.create(priceSlider, {
            start: 250, // [0,200000]
            connect: [true, false],
            step: 50,
            range: {
                min: [textFrom],
                max: [textTo],
            },
            /*
			format: wNumb({
				decimals: 0
			})
			*/
        });

        priceSlider.noUiSlider.on('update', function (values, handle) {
            //значення.innerHTML = values[handle];
            toVal.innerHTML = '$' + parseInt(values[handle]);
            fromVal.innerHTML = '$' + parseInt(values[handle] * 3);
        });
    }
}
rangeInit();
