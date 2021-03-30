import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  inscricao!: Subscription;
  curso : any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private cursoService: CursosService) { 
    
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id']
      this.curso = this.cursoService.getCurso(id);

      if(this.curso == null){
        this.router.navigate(['naoEncontrado'])
      }
    });

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
