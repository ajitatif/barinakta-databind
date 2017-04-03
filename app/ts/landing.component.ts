import { Component } from '@angular/core';

@Component({
    selector: 'landing-page',
    moduleId: module.id,
    template:
    `<div id="wrapper">
        <admin-nav></admin-nav>
        <div id="page-wrapper">
            <router-outlet>
            </router-outlet>
        </div>
    </div>`
})
export class LandingComponent {}