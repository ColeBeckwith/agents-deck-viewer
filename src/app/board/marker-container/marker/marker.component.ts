import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'agt-marker',
	templateUrl: './marker.component.html',
	styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

	@Input() color: string;
	@Input() letter: string;

	constructor() {
	}

	ngOnInit() {
	}

}
