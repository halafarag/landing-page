import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PositiveNumberDirective } from './directives/positive-number.directive';
import { StringOnlyDirective } from './directives/string-only.directive';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'welcom/:name', component: WelcomePageComponent },
];
@NgModule({
  declarations: [FormComponent, WelcomePageComponent, PositiveNumberDirective, StringOnlyDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DigtalBondModule {}
