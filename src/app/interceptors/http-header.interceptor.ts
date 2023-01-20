import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders : {
            //    // 'x-rapidapi-key': '5ed0b41a79c7405dbb312af82d09516d',
            //     'w-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            // },
            setParams: {
                key: '5ed0b41a79c7405dbb312af82d09516d'
            }
        })
        return next.handle(req);
    }
}