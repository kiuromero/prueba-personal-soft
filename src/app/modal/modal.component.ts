import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  disabledSlide: boolean = false;
  status : boolean = true;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,) {

  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
    });
    if (this.data) {
      if (this.data.action == 'preview') {
        this.disabledSlide = true;
      }
      this.form.get('email').setValue(this.data.email);
      this.form.get('usuario').setValue(this.data.usuario);
      this.form.get('nombres').setValue(this.data.nombres);
      this.form.get('apellidos').setValue(this.data.apellidos);
    }
  }

}
