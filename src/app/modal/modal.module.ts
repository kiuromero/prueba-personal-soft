import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //Angular Material  
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ModalComponent],
  providers: [],
  exports: [ModalComponent]
})
export class ModalModule {
}
