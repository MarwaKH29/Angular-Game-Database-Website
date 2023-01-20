import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError((err) => {
                return err;
              })
        );
    }
}