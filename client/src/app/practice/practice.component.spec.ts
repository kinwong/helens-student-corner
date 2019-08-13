import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { MaterialModule } from '../material.module';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html';
import { SlideShowPlayerComponent } from '../slide-show-player/slide-show-player.component';

describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PracticeComponent,
        SlideShowPlayerComponent,
        SanitizeHtmlPipe,
      ],
      imports: [
        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
