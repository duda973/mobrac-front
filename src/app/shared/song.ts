import { Artist } from "./artist";

export class Song {
  id: number;
  name: string;
  release_date: Date;
  album_name: string;
  lyrics: string;
  artist: Artist;
}
