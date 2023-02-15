import template from './paragraph.handlebars';

export class Paragraph {
    constructor(parent, headingText, contentText) {
        this.parent = parent;
        this.headingText = headingText;
        this.contentText = contentText;
    }

    render() {
        const {headingText, contentText} = this;
        const context = {headingText, contentText};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
