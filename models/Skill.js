export class Skill {
    constructor(text = 'Умение') {
        this.text = text;
    }

    fetchData() {
        this.text = 'Преподавать Frontend';
    }
}
