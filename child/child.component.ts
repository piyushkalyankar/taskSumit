import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() data : any[] | undefined;
  


  
  

  //data: { firstname: string; lastname: string; email: string; phone: string; age: number; }[] = [];
  
  //data: { firstname: string; lastname: string; email: string; phone: string; age: number; }[] = [];

}
