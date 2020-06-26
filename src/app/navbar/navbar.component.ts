import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   {

  constructor(private dataStorageService:DataStorageService) { }

  onSaveData(){
    this.dataStorageService.storeVina();
  }
  onFetchData(){
    this.dataStorageService.fetchVina().subscribe();
  }

}
