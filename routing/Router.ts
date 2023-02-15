import {MainController} from '../controllers/MainController';

const routes: Record<string, any> = {
    '/': MainController,
}

export class Router {
    constructor() {
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event: any) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {
            event.preventDefault();

            if (target.href !== undefined && target.target != '_blank') {
                this.go(target.href);

            } else {
                window.open(target.href);
            }
        }
    }

    go(pathname: string) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const ControllerClass = routes[window.location.pathname];
        const controller = new ControllerClass();
        controller.process();
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();
