import { Card, YgoService } from '../ygo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ygo',
  templateUrl: './ygo.component.html',
  styleUrls: ['./ygo.component.scss'],
})
export class YgoComponent implements OnInit, OnDestroy {
  private readonly _unsubscribe$ = new Subject<void>();
  private lodtList: Card[] = [];

  constructor(private ygoService: YgoService) {}

  ngOnInit(): void {
    this.ygoService.getLightOfDestructionSet().subscribe((data) => {
      debugger;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
