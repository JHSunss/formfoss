import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DynamicFormModel} from "../../../../models/dynamic-form.model";
import {QuestionService} from "../../../../services/question.service";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-form-preview',
    templateUrl: './form-preview.component.html',
    styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {
    formObject: DynamicFormModel;
    form: FormGroup;

    constructor(private router: ActivatedRoute,
                private location: Location,
                private qtService: QuestionService) { }

    ngOnInit() {
        this.router.paramMap
            .switchMap((params: ParamMap) => {
                return this.qtService.getForm(+params.get('id'))
            })
            .subscribe((form: DynamicFormModel) => {
                this.formObject = form;
                this.form = this.qtService.toFormGroup(this.formObject.formItems);
                console.log(this.formObject);
            });
    }

    goBack() {
        this.location.back();
    }

}
