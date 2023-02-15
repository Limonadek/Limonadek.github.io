export class Contacts {
    constructor(parent) {
        this.parent = parent;
    }

    render(data) {
        const container = document.createElement('div');
        data.forEach((item) => {
            const linkElement = document.createElement('a');
            linkElement.classList.add('external-link');
            linkElement.href = item.href;
            linkElement.textContent = item.text;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            container.appendChild(linkElement);
        })
        this.parent.appendChild(container);
    }
}
