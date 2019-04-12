import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.page.html',
  styleUrls: ['./view-location.page.scss'],
})
export class ViewLocationPage implements OnInit {
  currentLocation: any;
  constructor(private activeRoute: ActivatedRoute, private locationService: LocationService,
    private route: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      const locationId = params['id'];
      this.locationService.getLocations().subscribe(locations =>{
        const location = locations.find(i => i.key === locationId);
        if (location) {
          this.currentLocation = location;
        }
      });
    });
  }
  editLocation() {
    this.route.navigate(['/edit-location', this.currentLocation.key]);
  }
  return() {
    this.route.navigate(['/']);
  }
}
