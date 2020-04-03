import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from '../models/Disciplina';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  public modalRef: BsModalRef;
  public disciplinaForm: FormGroup;
  public titulo = 'Disciplinas';
  public disciplinaSelecionado: Disciplina;
  public textSimple: string;

  public disciplinas = [
    { id: 1, disciplina: 'Matematica', professor: 'Carlos' },
    { id: 2, disciplina: 'Fisica', professor: 'Cintia' },
    { id: 3, disciplina: 'Português', professor: 'Katia' },
    { id: 4, disciplina: 'Inglês', professor: 'Bruno' },
    { id: 5, disciplina: 'Programação', professor: 'Jefferson' }
  ];

  openModal(template: TemplateRef<any>) {
    const modalWidth = 'modal-lg';
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass(modalWidth);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }

  disciplinaSelect(disciplina: Disciplina) {
    this.disciplinaSelecionado = disciplina;
    this.disciplinaForm.patchValue(disciplina);
  }

  criarForm() {
    this.disciplinaForm = this.fb.group({
      professor: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

 disciplinaSubmit() {
    console.log(this.disciplinaForm.value);
  }

  voltar() {
    this.disciplinaSelecionado = null;
  }
}
