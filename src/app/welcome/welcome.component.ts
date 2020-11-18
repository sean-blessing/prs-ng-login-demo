import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: User = null;
  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.user = this.sysSvc.loggedInUser;
  }

}
