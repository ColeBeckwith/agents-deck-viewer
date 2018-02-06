import { Component, Input, OnInit } from '@angular/core';
import { AbilityCard } from '../../../classes/AbilityCard';

@Component({
  selector: 'agt-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.scss']
})
export class AbilityCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() card: AbilityCard;

}
