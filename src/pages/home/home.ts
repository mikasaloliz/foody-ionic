import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { list } from '../../mlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //spy:string;
  mylist : list;
  constructor(public navCtrl: NavController,public restProvider:RestProvider ) {

  }
  ionViewDidEnter(){
   this.restProvider.feed().subscribe(result=>{
     console.log(result);
     this.mylist = result;
    // this.spy= JSON.stringify(result);
   })
  }
}
