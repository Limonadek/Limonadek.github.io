import {Skill} from './Skill.js';

export class SkillCollection {
    constructor() {
        this.skills = [];
    }

    fetchSkills() {
        return fetch('/api/skills')
            .then((response) => response.json())
            .then((data) => {
                this.skills = data.map((item) => {
                    return new Skill(item.text);
                });
            });
    }

    getList() {
        return this.skills.map((skill) => skill.text);
    }
}
