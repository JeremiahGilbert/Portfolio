import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

import homeContent from "../../assets/homeContent.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentBlocks : Content[] = homeContent;

  constructor() { }

  ngOnInit(): void {
  }

}
