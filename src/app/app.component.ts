import { Component } from '@angular/core';
import Cls2, { Cls1 } from './myClass';
import anyName from './myClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngStyleApp';
  count=101;
  var1="xyz";
  var2="xyz";



  obj1:Cls1 = new Cls1();
  obj2: Cls2 = new Cls2();

  constructor(){
    alert("obj1 "+this.obj1.count);
    alert("obj2 "+this.obj2.num);
  }

  
}
