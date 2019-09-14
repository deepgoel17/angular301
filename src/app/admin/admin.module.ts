import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';

import { AddTheaterComponent } from './components/add-theater/add-theater.component';

import { AdminService } from './services/admin.service';
import { ChangeShowComponent } from './components/change-show/change-show.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [AdminComponent, AddTheaterComponent, ChangeShowComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, AdminRoutingModule],
  providers: [AdminService],
  exports: []
})
export class AdminModule {}
