import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface Card {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  atk: string;
  def: string;
  level: number;
  race: string;
  attribute: string;
  archetype: string;
}

@Injectable({ providedIn: 'root' })
export class YgoService {
  constructor(private http: HttpClient) {}
  getLightOfDestructionSet() {
    const LIGHTOFDESTRUCTION = 'light of destruction';
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${LIGHTOFDESTRUCTION}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getLightswornRelated() {}
}
