import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.page.html',
  styleUrls: ['./edit-location.page.scss'],
})
export class EditLocationPage implements OnInit {
  currentLocation: any;
  locationForm: FormGroup = new FormGroup({});
  constructor(private activeRoute: ActivatedRoute, private locationService: LocationService,
    private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      const locationId = params['id'];
      this.locationService.getLocations().subscribe(locations =>{
        const location = locations.find(i => i.key === locationId);
        if (location) {
          this.currentLocation = location;
          this.locationForm = this.buildForm(this.currentLocation);
        }
      });
    });
  }
  buildForm(location: any) {
    console.log('location param:', location);
    return this.fb.group({
      name: [location ? location.name : '', Validators.required],
      description: [location ? location.description : '', Validators.required],
      city: [location ? location.city : '', Validators.required],
      state: [location ? location.state : '', Validators.required],
      postalCode: [location ? location.postalCode : '', Validators.required]
    });
  }
  saveLocation() {
    const changeLoc = {
      name: this.locationForm.get('name').value,
      description: this.locationForm.get('description').value,
      city: this.locationForm.get('city').value,
      state: this.locationForm.get('state').value,
      postalCode: this.locationForm.get('postalCode').value
    };
    this.locationService.saveLocation(this.currentLocation.key, changeLoc);
    this.route.navigate(['/']);
  }
  cancelEdit() {
    this.route.navigate(['/view-location', this.currentLocation.key]);
  }
}
