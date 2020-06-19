import { Injectable } from "@angular/core";
import { Artist } from "./artist";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ArtistService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getArtistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>("http://192.168.0.13:8080/api/artists").pipe(
      tap((artists) => console.log("Artists fetched!")),
      catchError(this.handleError<Artist[]>("Get artists", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
