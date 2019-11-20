import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { from, Observable } from 'rxjs';
import { House } from '../House';
import { Character } from 'src/app/characters/Character';
import { HousesService } from '../houses.service';
import { CharactersService } from 'src/app/characters/characters.service';

@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {

public house$!: Observable<House>;
public character$!: Observable<Character[]>;

  public constructor(private route: ActivatedRoute, private readonly housesService: HousesService, private readonly charactersService: CharactersService) {}

  public ngOnInit() {
    const { id } = this.route.snapshot.params;
  }

  private loadHouse(id: number){
    this.house$ = this.housesService.getHouse(id);
  }

  private loadCharacters(id: number){
    this.character$ = this.charactersService.listHouseCharacters(id);
  }

}
