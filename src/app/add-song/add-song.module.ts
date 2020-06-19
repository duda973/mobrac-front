import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddSongPageRoutingModule } from './add-song-routing.module';

import { AddSongPage } from './add-song.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddSongPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddSongPage]
})
export class AddSongPageModule { }
