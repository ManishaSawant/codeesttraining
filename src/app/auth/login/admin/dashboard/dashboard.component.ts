import { Employeeservice } from './../../../employeeservice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginemployee } from '../../auth/login/loginemployee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;
  constructor(private employeeservice:Employeeservice, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  onSubmit(){
    let login=this.loginForm.value;
    this.login(login);
  }
  login(loginEmployee: Loginemployee) {
    this.employeeservice.loginemployee(loginEmployee).subscribe(
      employee => {
        debugger;
        var succ = employee;
        if(succ){
        this.loginForm.reset();
        localStorage.setItem("Employee", JSON.stringify(succ));
        this.router.navigate(['dashboard']);
        } else {
          this.Error = true;
          this.massage = "User ID/Password Wrong";
        }
      }
    )
  }
}
