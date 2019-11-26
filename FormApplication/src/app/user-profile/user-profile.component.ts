import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserProfileService } from '../user-profile.service';
import { UserProfileModel} from './model/user-profile-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  pageMode: string;
  buttonText: string;
  formdata: FormGroup;
  userModel: UserProfileModel;

  constructor(private formBuilder: FormBuilder,
  private userProfileService: UserProfileService) {
    this.userModel = new UserProfileModel();
   }

  ngOnInit() {
  this.formdata = this.formBuilder.group({
    id: ['', [Validators.required]],
    role: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    resortId: ['', [Validators.required]],
    resortName: ['', [Validators.required]]
  });
  this.fetchUserDetails();
  this.buttonText = 'Edit';
  this.pageMode = 'view';
  }

  fetchUserDetails() {
    this.userProfileService.getUserProfileDetails().subscribe(res => {
      console.log('Res :');
      console.log(res);
      this.formatDataToModel(res);
      this.formdata.patchValue(this.userModel);
    });
  }

  formatDataToModel(userData) {
    this.userModel['id'] = userData.managerProfile['id'];
    this.userModel['role'] = userData.managerProfile['role'];
    this.userModel['firstName'] = userData.managerProfile['firstName'];
    this.userModel['lastName'] = userData.managerProfile['lastName'];
    this.userModel['userName'] = userData.managerProfile['userName'];
    this.userModel['email'] = userData.managerProfile['email'];
    this.userModel['resortId'] = userData.managerProfile['resortId'];
    this.userModel['resortName'] = userData.managerProfile['resortName'];
  }

  onSubmitClick(data) {
    if ( this.pageMode === 'edit') {
      this.pageMode = 'view';
      this.buttonText = 'Edit';
    } else {
      this.pageMode = 'edit';
      this.buttonText = 'Save';
    }
    console.log(data);
  }
}
