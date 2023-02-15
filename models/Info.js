import {InfoBullet} from './InfoBullet.js';

const FAKE_RESPONSE = JSON.stringify({
    title: 'Руководитель группы разработки',
    explanation: 'Компания "VK", 1900 г. — н.в.',
    type: 'job',
    bullets: [
        'Преподавать Frontend',
        'Двигать кнопки',
        'Делать красиво',
        'Ходить с важным видом'
    ]
})

export class Info {
    constructor(title = '', explanation = '', type = '', bullets = []) {
        this.title = title;
        this.explanation = explanation;
        this.type = type;
        this.bullets = this.prepareBullets(bullets);
    }

    prepareBullets(value) {
        return value.map((text) => new InfoBullet(text));
    }

    fetchData() {
        console.log('Info :: Получили данные с сервера!');
        // // Ненастоящий ответ от сервера для демонстрации
        // const data = JSON.parse(FAKE_RESPONSE);
        this.title = data.title;
        this.explanation = data.explanation;
        this.bullets = this.prepareBullets(data.bullets);
        this.type = data.type;
    }

    serialize() {
        return {
            title: this.title,
            explanation: this.explanation,
            type: this.type,
            bullets: this.bullets,
        }
    }
}
