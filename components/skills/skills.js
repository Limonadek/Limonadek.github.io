function handleSkillsClick(event) {
    const skillsList = document.querySelector('#skills-list');
    skillsList.classList.toggle('hidden');

    const skills = event.target;

    if (skills.dataset.state === 'open') {
        skills.dataset.state = 'closed';
        skills.textContent = 'Показать список умений';
    } else {
        skills.dataset.state = 'open';
        skills.textContent = 'Скрыть список умений';
    }
}

export class Skills {
    constructor(parent) {
        this.parent = parent;
        this.list = null;
    }

    render(headingText, skillsArray) {
        const container = document.createElement('div');

        const headingElement = document.createElement('h3');
        headingElement.textContent = headingText;

        const spoilerElement = document.createElement('div');
        spoilerElement.id = 'skills';
        spoilerElement.dataset.state = 'closed';
        spoilerElement.textContent = 'Показать список умений';

        this.list = document.createElement('ul');
        this.list.id = 'skills-list';
        this.list.classList.add('hidden');

        const skillsElementsArray = skillsArray.map((text) => {
            const elem = document.createElement('li');
            elem.textContent = text;

            return elem;
        });

        skillsElementsArray.forEach((item) => {
            this.list.appendChild(item);
        })

        spoilerElement.addEventListener('click', handleSkillsClick);

        container.append(headingElement, spoilerElement, this.list)
        this.parent.appendChild(container);
    }

    update(data) {
        this.list.innerHTML = '';

        const skillsElementsArray = data.map((text) => {
            const elem = document.createElement('li');
            elem.textContent = text;

            return elem;
        });

        skillsElementsArray.forEach((item) => {
            this.list.appendChild(item);
        });
    }
}

// const skillsElementsArray = skillsArray.map((text) => {
//     const elem = document.createElement('li');
//     elem.textContent = text;
//
//     return elem;
// });

// const skillsList = document.querySelector('#skills-list');
// for (let i = 0; i < skillsElementsArray.length; i++) {
//     const item = skillsElementsArray[i];
//     skillsList.appendChild(item);
// }

// const skills = document.querySelector('#skills');
// skills.addEventListener('click', handleSkillsClick);
