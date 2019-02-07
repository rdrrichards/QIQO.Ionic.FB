import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  locations: any[];
  constructor(private locationService: LocationService) {}
  ngOnInit() {
    this.locationService.getLocations().subscribe(
      locations => {
        this.locations = locations;
        console.log(this.locations);
      }
    );
  }
  clickLocation(key: string) {
    // this.navCtrl.push(ViewLocationPage, key);
  }
  addLocation() {
    // this.navCtrl.push(AddLocationPage);
  }
}
