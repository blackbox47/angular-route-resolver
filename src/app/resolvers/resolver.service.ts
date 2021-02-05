import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostService } from '../services/post.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ResolverService implements Resolve<any> {

  constructor(private postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.postService.getAllPost().pipe(
      catchError((error) => {
        return of('No data');
      }))
  }
}
