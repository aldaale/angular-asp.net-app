
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  constructor(private HousingService: HousingService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    if ( this.route.snapshot.url.toString()) {
      this.SellRent = 2; // means that we are on rent-property URL else we are on the base URL
    }
    this.HousingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties = data;

        // const newProperty = JSON.parse(localStorage.getItem('newProp'));

        // if(newProperty.SellRent === this.SellRent) {
        //   this.properties = [newProperty, ...this.properties];
        // }
        console.log(data);
      }, error => {
        console.log('httperror');
      }
    )
  }

}
