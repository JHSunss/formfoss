import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import {LoginComponent} from './component/users/login/login.component';
import {RegisterComponent} from './component/users/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {UsersComponent} from './component/users/users.component';
import { UserDetailComponent } from './component/users/user-detail/user-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSelectModule, MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule, MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule, MdTooltipModule
} from '@angular/material';
import 'hammerjs';
import { FormPrototypeComponent } from './component/form-prototype/form-prototype.component';
import { DynamicFormComponent } from './component/questions/dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './component/questions/dynamic-question/dynamic-question.component';
import { DynamicEditComponent } from './component/questions/dynamic-edit/dynamic-edit.component';
import {QuestionService} from "./services/question.service";
import { HomePageComponent} from './component/questions/homepage/homepage.component';
import { QuestionListComponent } from './component/questions/question-list/question-list.component';
import { FormPreviewComponent } from './component/questions/dynamic-form/form-preview/form-preview.component';
import { FormEditComponent } from './component/questions/dynamic-edit/form-edit/form-edit.component';
import { FormNewComponent } from './component/questions/dynamic-edit/form-new/form-new.component';
import { FormSettingsComponent } from './component/questions/dynamic-edit/form-settings/form-settings.component';
import { FRQuestionComponent } from './component/questions/form-result/frquestion/frquestion.component';
import { FRUserComponent } from './component/questions/form-result/fruser/fruser.component';
import { FRStatComponent } from './component/questions/form-result/frstat/frstat.component';
import {ChartsModule} from "ng2-charts";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {SubmitPreviewComponent} from "./component/questions/dynamic-form/submit-preview/submit-preview.component";
import {UserEditComponent} from "./component/users/user-edit/user-edit.component";
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UsersComponent,
        UserDetailComponent,
        FormPrototypeComponent,
        DynamicFormComponent,
        DynamicQuestionComponent,
        DynamicEditComponent,
        QuestionListComponent,
        QuestionListComponent,
        FormPreviewComponent,
        FormEditComponent,
        FormNewComponent,
        FormSettingsComponent,
        FRQuestionComponent,
        FRUserComponent,
        FRStatComponent,
        HomePageComponent,
        SubmitPreviewComponent,
        UserEditComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCheckboxModule,
        MdInputModule,
        MdNativeDateModule,
        ReactiveFormsModule,
        MdAutocompleteModule,
        MdRadioModule,
        MdDatepickerModule,
        MdSelectModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdMenuModule,
        MdSidenavModule,
        MdToolbarModule,
        MdListModule,
        MdGridListModule,
        MdCardModule,
        MdTabsModule,
        MdDialogModule,
        MdIconModule,
        MdChipsModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdDialogModule,
        MdTooltipModule,
        MdSnackBarModule,
        ChartsModule
    ],
    entryComponents: [SubmitPreviewComponent],
    providers: [UserService, QuestionService ,{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
