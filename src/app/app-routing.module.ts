import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'appointments',
      component: AppointmentsComponent
    },
    {
      path: 'patients',
      component: PatientsComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
