import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heores.services';
import { Heroe } from '../../services/heores.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, private router: Router) {
    console.log('constructor');

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number) {
    console.log(index);
    this.router.navigate(['/heroe', index]);
  }

}
