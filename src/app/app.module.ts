import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppComponent } from './app.component';
import { EmployeeFormComponentComponent } from './components/employee-form-component/employee-form-component.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponentComponent,
    AdminComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

