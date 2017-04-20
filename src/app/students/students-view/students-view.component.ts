import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { bdInfo } from '../students-form/data';

import { StudentsService } from './../shared/students.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {
  private student;
  private situacao;
  private remuneracao;
  private sexo;
  private origin;
  private mesInicio;
  private mesFim;
  private bolsas;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.studentsService.getStudent(id)
      .subscribe(
        student => {
          this.student = student;
          console.log (this.student); 
        
          this.situacao = bdInfo.estagios.filter(situacao => 
            situacao.id === student.answers[1].alternative_id
          )[0];


          this.remuneracao = bdInfo.salary.filter(remuneracao =>
            remuneracao.value === student.answers[2].alternative_id
          )[0];

          this.bolsas = bdInfo.pronatec.filter(bolsas =>
            bolsas.id === student.pronatec.id
          )[0];
          
          this.sexo = bdInfo.genders.filter(sexo => 
            sexo.id === student.gender
          )[0];

          this.origin = this.student.origin == 2 ? "Pública": "Particular";
          
          this.mesInicio = bdInfo.months.filter(mes => 
            mes.id === student.start_month
          )[0];

          this.mesFim = bdInfo.months.filter(mes => 
            mes.id === student.end_month
          )[0];
        },
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

}
