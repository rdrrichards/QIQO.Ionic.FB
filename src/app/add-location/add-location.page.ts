import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {
  location: any;
  locationForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
    public locationService: LocationService,
    private fb: FormBuilder,
    public authService: AuthService) {
      this.locationForm = this.buildForm();
    }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      console.log('user', user);
      if (!user) {
        this.authService.login()
          .catch(_ => this.router.navigate(['/tab1']));
      }
    });
  }
  buildForm() {
    console.log('location param:', location);
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
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
    this.locationService.addLocation(changeLoc);
    this.router.navigate(['/tab1']);
  }

}
