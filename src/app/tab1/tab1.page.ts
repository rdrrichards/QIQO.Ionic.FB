import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  locations: any[];
  constructor(private locationService: LocationService, private router: Router) {}
  ngOnInit() {
    this.locationService.getLocations().subscribe(
      locations => {
        this.locations = locations;
        console.log(this.locations);
      }
    );
  }
  clickLocation(key: string) {
    this.router.navigate(['/view-location', key]);
  }
}
