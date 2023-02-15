import {ColumnLeft} from '../components/column-left/column-left.js';
import {ColumnRight} from '../components/column-right/column-right.js';

import '../components/skills/skills.js';

export class MainView {
    constructor() {
        this.columnLeft = null;
        this.columnRight = null;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        container.classList.add('page-container');

        const columnLeftElement = document.createElement('div');
        columnLeftElement.classList.add('column-left');
        this.columnLeft = new ColumnLeft();

        const columnRightElement = document.createElement('div');
        columnRightElement.classList.add('column-right');
        this.columnRight = new ColumnRight();

        container.append(columnLeftElement, columnRightElement);
        root.append(container);
        this.columnLeft.render(columnLeftElement);
        this.columnRight.render(columnRightElement);
    }
}
