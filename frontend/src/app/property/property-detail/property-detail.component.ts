import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertId: number;
  property = new Property();



  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit(): void {
    this.propertId = Number (this.route.snapshot.params['id']);
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp']
      })

  //   this.route.params.subscribe(
  //     (params) => {
  //       this.propertId = Number(params['id']);
  //       this.housingService.getProperty(this.propertId).subscribe(
  //         (data: Property) => {
  //           this.property = data;
  //         }, error => this.router.navigate(['/'])
  //     }
  //   );
  // }




}
}
