import { Injectable } from "@angular/core";
import { Song } from "./song";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SongService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  addSong(song: Song): Observable<any> {
    return this.http
      .post<Song>(
        "http://192.168.0.13:8080/api/songs/insert",
        song,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Song>("Add Song")));
  }

  getSong(id): Observable<Song[]> {
    return this.http
      .get<Song[]>("http://192.168.0.13:8080/api/songs/" + id)
      .pipe(
        tap((_) => console.log(`Song fetched: ${id}`)),
        catchError(this.handleError<Song[]>(`Get Song id=${id}`))
      );
  }

  getSongList(): Observable<Song[]> {
    return this.http.get<Song[]>("http://192.168.0.13:8080/api/songs").pipe(
      tap((songs) => console.log("Songs fetched!")),
      catchError(this.handleError<Song[]>("Get Songs", []))
    );
  }

  updateSong(id, song: Song): Observable<any> {
    return this.http
      .put("http://192.168.0.13:8080/api/songs/" + id, song, this.httpOptions)
      .pipe(
        tap((_) => console.log(`Song updated: ${id}`)),
        catchError(this.handleError<Song[]>("Update Song"))
      );
  }

  deleteSong(id): Observable<Song[]> {
    return this.http
      .delete<Song[]>(
        "http://192.168.0.13:8080/api/songs/" + id,
        this.httpOptions
      )
      .pipe(
        tap((_) => console.log(`Song deleted: ${id}`)),
        catchError(this.handleError<Song[]>("Delete Song"))
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
