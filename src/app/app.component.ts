import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { html2pdf } from 'html2pdf.js'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    private onDestroy$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.unsubscribe();
    }

    ngOnInit(): void {
        const element = document.getElementById("test");
        html2pdf(element);
    }
}
