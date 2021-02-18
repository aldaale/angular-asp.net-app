import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id":1,
    "Name": "Birla House",
    "Type":"House",
    "Price":19999
   },
    {
    "Id":2,
    "Name": "Erose Villa",
    "Type":"House",
    "Price":13100
   },
    {
    "Id":3,
    "Name": "Mark Hill",
    "Type":"House",
    "Price":12500
   },
    {
    "Id":4,
    "Name": "Gun Hill",
    "Type":"House",
    "Price":11030
   },
    {
    "Id":5,
    "Name": "Marco House",
    "Type":"House",
    "Price":143000
   },
    {
    "Id":6,
    "Name": "Pearl White House",
    "Type":"House",
    "Price":184000
   }

]
  constructor() { }

  ngOnInit(): void {
  }

}
