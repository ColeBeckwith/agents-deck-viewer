import { Component, Input, OnInit } from '@angular/core';
import { BoardSpace } from '../../../classes/InfiltrationCard';

@Component({
	selector: 'agt-marker-container',
	templateUrl: './marker-container.component.html',
	styleUrls: ['./marker-container.component.scss']
})
export class MarkerContainerComponent implements OnInit {

	@Input() space: BoardSpace;

	constructor() {
	}

	ngOnInit() {
	}

}
