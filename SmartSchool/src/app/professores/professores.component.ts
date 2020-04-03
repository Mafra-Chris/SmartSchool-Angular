import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public profForm: FormGroup;
  public titulo = 'Professores';
  public profSelecionado: Professor;
  public modalRef: BsModalRef;
  public professores = [
    { id: 1, nome: 'Carlos', disciplina: 'Matematica'},
    { id: 2, nome: 'Cintia', disciplina: 'Fisica'},
    { id: 3, nome: 'Katia', disciplina: 'Portugues'},
    { id: 4, nome: 'Bruno', disciplina: 'Inglês'},
    { id: 5, nome: 'Jefferson', disciplina: 'Programação'},
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit() {
  }

  profSelect(prof: Professor) {
    this.profSelecionado = prof;
    this.profForm.patchValue(prof);
  }

  criarForm() {
    this.profForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  profSubmit() {
    console.log(this.profForm.value);
  }

  voltar() {
    this.profSelecionado = null;
  }



}
