import {MainView} from '../views/MainView.js';
import {Person} from '../models/Person.js';
import {SkillCollection} from '../models/SkillCollection.js';
import EventBus from '../utils/eventBus';

export class MainController {
    process(): void {
        const view = new MainView();
        view.render();

        const person = new Person();
        EventBus.emit('summary:loading');
        person.fetchData();

        const skills = new SkillCollection();
        skills.fetchSkills().then(() => {
            const data = skills.getList();
            view.columnRight.updateSkills(data);
        });
    }
}
