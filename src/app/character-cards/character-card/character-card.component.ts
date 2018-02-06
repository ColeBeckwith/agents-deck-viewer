import { Component, Input, OnInit } from '@angular/core';
import { CharacterCard } from '../../../classes/CharacterCard';

@Component({
  selector: 'agt-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() character: CharacterCard;

}
