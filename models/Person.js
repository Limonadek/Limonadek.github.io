import EventBus from '../utils/eventBus';

export class Person {
    constructor(name = 'Имя', surname = 'Фамилия') {
        this.name = name;
        this.surname = surname;
    }

    getDisplayName() {
        return `${this.name} ${this.surname}`;
    }

    fetchData() {
        fetch('/api/person')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('summary:not-found');
                    return;
                }

                if (status === 400) {
                    EventBus.emit('summary:bad-request');
                    return;
                }

                if (status === 500) {
                    EventBus.emit('internal server error');
                    return;
                }

                return response.json();
            })
            .then((data) => {
                console.log('Person :: Получили данные с сервера!', data);
                this.name = data.name;
                this.surname = data.surname;

                EventBus.emit('summary:got-info', data);
            });
    }
}
