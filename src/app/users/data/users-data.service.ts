import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../users.model';
import { parseDTO } from './users.dto';
import { fromDTO } from './users.mapper';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  httpClient = inject(HttpClient);

  fetchUsers(): Observable<User[]> {
    const url = 'https://dummyjson.com/users';
    return this.httpClient.get(url).pipe(
      map((response) => {
        const dto = parseDTO(response);
        if (dto.success) {
          return fromDTO(dto.data);
        } else {
          console.error(dto.error);
          return [];
        }
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
}
