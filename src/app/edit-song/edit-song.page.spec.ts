import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSongPage } from './edit-song.page';

describe('EditSongPage', () => {
  let component: EditSongPage;
  let fixture: ComponentFixture<EditSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
