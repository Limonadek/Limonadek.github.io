export class Photo {
    constructor(parent) {
        this.parent = parent;
    }

    render(alt, src) {
        const image = document.createElement('img');
        image.alt = alt;
        image.src = src;
        image.classList.add('column-left__photo');

        this.parent.appendChild(image);
    }
}
