import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heores.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this._heroesService.buscarHeroes(termino);
  }

}
