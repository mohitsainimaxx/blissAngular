import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyCommonService } from '../my-common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList:any;
  constructor(private mycommon:MyCommonService) {

  }

  ngOnInit(): void {
    let pageNo=1;
    this.getRecords(1);
  }

  getRecords(pageNo:any){
      this.mycommon.getRecords(pageNo).subscribe((res)=>{
        console.log(res);
            this.userList=res;
            console.log(this.userList);
      })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userList.unsubscribe();
  }
}
