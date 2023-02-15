import {Paragraph} from '../paragraph/paragraph.js';
import {Photo} from '../photo/photo.js';

import ManPhoto from '../../MyPhoto.jpg';

export class ColumnLeft {
    constructor(parent) {
        this.parent = parent;
        this.paragraphList = [{
            heading: 'Контактная информация',
            content: 'Какой-то убедительно длинный текст о том как можно со мной связаться обязательно пишите не забывайте очень хочу со всеми пообщаться. Какой-то убедительно длинный текст о том как можно со мной связаться обязательно пишите не забывайте очень хочу со всеми пообщаться'
        }, {
            heading: 'Рекомендации с прошлых мест работы',
            content: 'Какой-то убедительно длинный текст о том как можно со мной связаться обязательно пишите не забывайте очень хочу со всеми пообщаться. Какой-то убедительно длинный текст о том как можно со мной связаться обязательно пишите не забывайте очень хочу со всеми пообщаться'
        }];
    }

    render(container) {
        const photo = new Photo(container);
        photo.render('Моё фото', ManPhoto);

        const columnLeftTextElement = document.createElement('div');
        columnLeftTextElement.classList.add('column-left__text');

        this.paragraphList.forEach((element) => {
            const paragraph = new Paragraph(columnLeftTextElement, element.heading, element.content);
            paragraph.render();
        });

        container.appendChild(columnLeftTextElement);
    }
}
