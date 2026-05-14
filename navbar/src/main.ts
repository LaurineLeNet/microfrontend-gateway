import {createApplication} from '@angular/platform-browser';
import {App} from './app/app';
import {createCustomElement} from "@angular/elements";

createApplication()
    .then((appRef) => {
        const navElement = createCustomElement(App, {
            injector: appRef.injector
        });

        if (!customElements.get('navbar-club')) {
            customElements.define('navbar-club', navElement);
        }
    })
    .catch((err) => console.error(err));
