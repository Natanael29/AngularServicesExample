import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../services/characters/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: any = {};

  constructor(private service: CharactersService) {}

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe(characters => {
      this.characters = characters.results;
      console.log(this.characters)
    });
  }

}
