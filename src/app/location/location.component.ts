import { Component, OnInit } from '@angular/core';

import { LocationsService } from '../services/locations/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: any = {};

  constructor(private service: LocationsService) {}
  
  displayedColumns: string[] = ['name', 'type', 'dimension'];

  ngOnInit(): void {
    this.service.getAllLocations().subscribe(locations => {
      this.locations = locations.results;
      console.log(this.locations)
    });
    
  }

}
