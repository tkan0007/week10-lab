import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorInMovieComponent } from './add-actor-in-movie.component';

describe('AddActorInMovieComponent', () => {
  let component: AddActorInMovieComponent;
  let fixture: ComponentFixture<AddActorInMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActorInMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActorInMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
