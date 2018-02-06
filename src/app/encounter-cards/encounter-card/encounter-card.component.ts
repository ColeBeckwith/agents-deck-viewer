import { Component, Input, OnInit } from '@angular/core';
import { EncounterCard } from '../../../classes/EncounterCard';

@Component({
  selector: 'agt-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() card: EncounterCard;
}
