import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('PersistanceService set error', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) ?? 'Not found');
    } catch (error) {
      console.log('PersistanceService get error', error);
      return null;
    }
  }
}
