import { Employeeservice } from './employeeservice';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

describe('Employeeservice', () => {
  it('should create an instance', () => {
    expect(new Employeeservice()).toBeTruthy();
  });
});
