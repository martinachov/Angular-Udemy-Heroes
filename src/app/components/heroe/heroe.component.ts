import { HeroesService } from './../../services/heores.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });

  }


}
