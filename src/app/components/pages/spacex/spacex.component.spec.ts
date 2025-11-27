import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexComponent } from './spacex.component';

describe('SpacexComponent', () => {
  let component: SpacexComponent;
  let fixture: ComponentFixture<SpacexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpacexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
