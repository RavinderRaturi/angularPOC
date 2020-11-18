//to regeister this compoent we need to add this into a module

import { Component } from '@angular/core';
import { CourcesService } from './courses.service';

@Component({
    selector: 'courses', 
    template: `
            <h2>{{"test: " +title}}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course}}
                </li>
            </ul>
    `
})

export class CoursesComponent {
    title = "Title of Course goes here";
    courses;

    constructor(service : CourcesService){
        //let service = new CourcesService(); // lets inject the dependency of this service into consturctor rather than creating a new object
        this.courses = service.getCourses();
    }
}