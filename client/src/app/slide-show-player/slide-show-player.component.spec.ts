import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowPlayerComponent } from './slide-show-player.component';

describe('SlideShowPlayerComponent', () => {
  let component: SlideShowPlayerComponent;
  let fixture: ComponentFixture<SlideShowPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
