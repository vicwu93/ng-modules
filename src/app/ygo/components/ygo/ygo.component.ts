import {
  ArchetypeResponse,
  Card,
  YgoService,
} from '../../../services/ygo.service';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ygo',
  templateUrl: './ygo.component.html',
  styleUrls: ['./ygo.component.scss'],
})
export class YgoComponent implements OnInit {
  private _unsubscribe$ = new Subject<void>();
  lodtList: Observable<ArchetypeResponse> = new Observable<ArchetypeResponse>();

  constructor(private ygoService: YgoService) {}

  ngOnInit(): void {
    const types = [
      'effect monster',
      'xyz monster',
      'synchro monster',
      'spell card',
    ];

    this.lodtList = this.ygoService.getArchetype('lightsworn', types);
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  trackByFn(index: number, item: any) {
    return item.id || undefined;
  }
}
