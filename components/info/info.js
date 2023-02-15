export class Info {
    constructor(parent) {
        this.parent = parent;
    }

    render(page, data) {
        const container = document.createElement('div');
        const headingElement = document.createElement('h3');
        headingElement.textContent += page;

        const textElement = document.createElement('span');
        textElement.textContent = data;
        container.append(headingElement, textElement);

        this.parent.appendChild(container);
    }
}
