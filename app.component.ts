import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';

  // myForm = document.getElementById("myForm") as HTMLFormElement;

  // formData = new FormData(this.myForm);

  StuudentDataArr : any[] = [];
  


  addData(){

    const Student  = {
      firstname : '',
      lastname : '',
      email : '',
      phone : '',
      age : ''
    }

    Student.firstname = (document.getElementById('firstname') as HTMLInputElement).value;
    Student.lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    Student.email = (document.getElementById('email') as HTMLInputElement).value;
    Student.phone = (document.getElementById('phone') as HTMLInputElement).value;
    Student.age = (document.getElementById('age') as HTMLInputElement).value;
    this.StuudentDataArr.push(Student);
    (document.getElementById('firstname') as HTMLInputElement).value = '';
    (document.getElementById('lastname') as HTMLInputElement).value ='';
    (document.getElementById('email') as HTMLInputElement).value  ='';
    (document.getElementById('age') as HTMLInputElement).value  ='';
    (document.getElementById('phone') as HTMLInputElement).value  ='';
    
  }


}
