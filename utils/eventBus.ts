class EventBus {
    // key - название события, value - массив (сет) коллбеков
    listeners: Record<string, any> = {};

    on(eventName: string, callback: Function) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = new Set();
        }

        this.listeners[eventName].add(callback);
    }

    off(eventName: string, callback: Function) {
        if (!this.listeners[eventName]) {
            return;
        }

        // @ts-expect-error TODO: Откуда?
        const newListeners = this.listeners[listeners]
            .filter((listener: Function) => listener !== callback);

        this.listeners[eventName] = newListeners;
    }

    emit(eventName: string, data?: any) {
        if (!this.listeners[eventName]) {
            return;
        }

        this.listeners[eventName].forEach((listener: Function) => {
            listener(data);
        });
    }
}

export default new EventBus();
