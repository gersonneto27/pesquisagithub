import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSeachComponent } from './lib-seach.component';

describe('LibSeachComponent', () => {
  let component: LibSeachComponent;
  let fixture: ComponentFixture<LibSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibSeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
