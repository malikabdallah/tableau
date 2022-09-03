import { Component, Input, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { interaction } from '../model/interaction.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild("childComponent") childComponent:TemplateRef<any>;
  @Input()
  public interaction:interaction;
  @Input()
  public showState:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
