import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientsComponent } from 'src/app/modules/patients/patients.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { AppointmentsComponent } from 'src/app/modules/appointments/appointments.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PatientsComponent,
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
