import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BehaviourServiceService {

  public behaveData = new BehaviorSubject<string>("Default Value")
  constructor() { }

}

