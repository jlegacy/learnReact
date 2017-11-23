import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-router-assignment',
  templateUrl: './router-assignment-detail.component.html',
  styleUrls: ['./router-assignment-detail.component.css']
})
export class RouterAssignmentDetailComponent implements OnInit {
  private selectedMonth;
  private selectedYear;
  private selectedPage;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(result => {
      this.selectedYear = result[0].get('year');
      this.selectedMonth = result[0].get('month');
      this.selectedPage = result[1].get('page');
    })
  }

  showAll = function () {
    this.router.navigate(['/homepage'], {
      queryParams:{page: this.selectedPage}
    } );
  }
}
