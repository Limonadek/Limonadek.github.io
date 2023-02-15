import EventBus from '../../utils/eventBus';
import {Loader} from '../loader/loader.js';

export class Summary {
    constructor(parent) {
        this.parent = parent;

        const container = document.createElement('div');
        container.classList.add('summary');
        this.container = container;

        EventBus.on('summary:got-info', this.update.bind(this));
        EventBus.on('summary:loading', this.render.bind(this));
    }

    render(displayName, position) {
        if (!displayName && !position) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        const nameElement = document.createElement('h1');
        nameElement.textContent = displayName;

        const positionElement = document.createElement('h2');
        positionElement.textContent = position;

        this.container.append(nameElement, positionElement);

        this.parent.prepend(this.container);
    }

    update({name, surname, position} = {}) {
        this.container.innerHTML = '';
        this.render(`${name} ${surname}`, position);
    }
}
