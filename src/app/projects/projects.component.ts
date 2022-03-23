import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

import projectJson from "../../assets/testContent2.json"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  contentBlocks : Content[] = projectJson;

  constructor() { }

  ngOnInit(): void {
  }

}
