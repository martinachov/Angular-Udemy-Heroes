
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: Heroe[] = [
    { nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Batman',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión».',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados ...',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ...',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza...',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal ...',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse');
   }

   getHeroes() {
    return this.heroes;
  }

  getHeroe(index: number) {
    return this.heroes[index];
  }

  buscarHeroes(termino: string) {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();
    console.log(this.heroes);
    for ( const heroe of this.heroes ) {
      const nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroesArr.push(heroe);
      }
    }
    console.log(heroesArr);
    return heroesArr;
  }

}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
