import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 992656799 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 992656790 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 992656757 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 992656737 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 992622767 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 992611767 },
    { id: 7, nome: 'Paulo', sobrenome: 'Jose', telefone: 992656707 },
  ];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

}
