import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {

    id: number;
    editMode: boolean = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.editMode = params['id'] !== null;
        })
    }
}
