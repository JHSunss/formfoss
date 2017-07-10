import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from "../../services/question-control.service";
import {QuestionBase} from "../question-base";
import {FormGroup} from "@angular/forms";
import {QuestionService} from "../../services/question.service";
import {DynamicFormModel} from '../dynamic-form.model';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    providers: [ QuestionControlService, QuestionService ]
})
export class DynamicFormComponent implements OnInit {
    //@Input() questions: QuestionBase<any>[] = [];
    formObject: DynamicFormModel;
    form: FormGroup;
    payLoad = '';

    constructor(private qcService: QuestionControlService,
                private qtService: QuestionService) { }

    ngOnInit() {
        this.formObject = this.qtService.getDynamicFormModel();
        this.form = this.qcService.toFormGroup(this.formObject.questions);
        console.log(this.formObject);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}