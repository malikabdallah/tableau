import { Component, OnInit } from '@angular/core';
import { interaction } from '../model/interaction.model';

@Component({
  selector: 'app-list-interaction',
  templateUrl: './list-interaction.component.html',
  styleUrls: ['./list-interaction.component.css']
})
export class ListInteractionComponent implements OnInit {



  public interactions:interaction []=[
    {id:1,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"sms",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:2,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:3,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"courrier",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:4,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:5,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:6,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:7,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:8,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:9,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:10,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:11,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},
    {id:12,dateCreation:"22/22/2222",type:"acceuil distrib",sens:'sortant',canal:"email",prm:1231,interlocuteur:"blac",dossier:"aaa",conseiller:"kevin"},

 
  ];

  details:boolean[]=[];
  

  constructor() { }

  ngOnInit(): void {
    this.interactions.forEach(interaction =>{
      this.details.push(false);
    })
  }

  loadDetail(index:number){
    //var i=Number(index);
    this.details[index]=!this.details[index];
  }

}
