//to regeister this compoent we need to add this into a module

import { Component } from '@angular/core';
import { CourcesService } from './courses.service';

@Component({
    selector: 'courses', 
    template: `
            <h2>{{"test: " +title}}</h2>
            <button class="btn btn-primary" [class.active]="isActive">class binding button example</button>
            <p><p><p><p><p><p>
            <button [style.backgroundColor]="isActive ? 'blue' : 'red'">style binding button example</button>
            <p><p><p><p><p><p>
            <button (click)="onSave()">event binding example</button>
            <p><p><p><p><p><p>
            <div (click)="divClick()">test
            <p><p><p>
            <button (click)="onSaveObject($event)">event binding example with object </button>
            <p><p><p>
            </div>

            <input (keyup)="onKeyUp($event)" />
            <p><p><p>
            <input (keyup.enter)="onKeyUpWithEventFilter($event)" />
            <ul>
                <li *ngFor="let course of courses">
                    {{ course}}
                </li>
            </ul>
    `
})

export class CoursesComponent {
    onKeyUpWithEventFilter($event : any)
    {
        if($event.keyCode===13) console.log("Enter was pressed!!");
        else console.log("something else was pressed.");
    }
    onKeyUp($event : any)
    {
if($event.keyCode===13) console.log("Enter was pressed!!");
else console.log("something else was pressed.");
    }
    divClick()
    {

        console.log("div was clicked!!!");
    }
    onSave()
    {
        console.log("button was clicked.....")
    }
    onSaveObject($event: any)
    {
        event?.stopPropagation();//use this to stop event bubbling.
        console.log("button was clicked.....",$event)
    }
    title = "Title of Course goes here";
    courses;
    isActive = false;

    constructor(service : CourcesService){
        //let service = new CourcesService(); // lets inject the dependency of this service into consturctor rather than creating a new object
        this.courses = service.getCourses();
        
    }
}