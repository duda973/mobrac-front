import { Component, OnInit, NgZone } from '@angular/core';
import { SongService } from './../shared/song.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.page.html',
  styleUrls: ['./add-song.page.scss'],
})

export class AddSongPage implements OnInit {

  songForm: FormGroup;

  constructor(
    private songAPI: SongService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.songForm = this.fb.group({
      name: [''],
      release_date: [''],
      album_name: [''],
      lyrics: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songAPI.addSong(this.songForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.songForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }

}
