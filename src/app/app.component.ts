import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  total=0;
  qty=0;

  title = 'menu';

  foodmenu=[
    {id:1,name:"دجاج",price:35,description:"دجاج فروج",img:"assets/images/chicken.jpg"},
    {id:2,name:"دجاج",price:25,description:"دجاج بروست",img:"assets/images/chicken1.jpg"},
    {id:3,name:"معصوب",price:15,description:"معصوب قشطة",img:"assets/images/masoub.png"},
    {id:4,name:"جمبري",price:39,description:"وجبة الجمبري",img:"assets/images/shrimp.jpg"}
  ]

  sum( event: any, price: number ){
    const isChecked: boolean=event.target.checked;
    if(isChecked){
      this.total=this.total+price
      this.qty+=1;
    }
    else{
      this.total=this.total-price
      this.qty-=1;
    }
  
  }

  menuName:string="";

  findMenu(menu:any[]){
    return menu.filter(item=> item.name.toLowerCase().includes( this.menuName.toLocaleLowerCase()));
  }
}