import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertId: number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


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

  this.galleryOptions = [
    {
      width: '100%',
      height: '465px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
  ];

  this.galleryImages = [
    {
      small: 'assets/images/gallery/internal-1.jpg',
      medium: 'assets/images/gallery/internal-1.jpg',
      big: 'assets/images/gallery/internal-1.jpg',
    },
    {
      small: 'assets/images/gallery/internal-2.jpg',
      medium: 'assets/images/gallery/internal-2.jpg',
      big: 'assets/images/gallery/internal-2.jpg',
    },
    {
      small: 'assets/images/gallery/internal-3.jpg',
      medium: 'assets/images/gallery/internal-3.jpg',
      big: 'assets/images/gallery/internal-3.jpg',
    },
    {
      small: 'assets/images/gallery/internal-5.jpg',
      medium: 'assets/images/gallery/internal-5.jpg',
      big: 'assets/images/gallery/internal-5.jpg',
    },
    {
      small: 'assets/images/gallery/internal-4.jpg',
      medium: 'assets/images/gallery/internal-4.jpg',
      big: 'assets/images/gallery/internal-4.jpg',
    }

  ];


}
}
