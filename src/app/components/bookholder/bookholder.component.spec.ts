import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookholderComponent } from './bookholder.component';

describe('BookholderComponent', () => {
  let component: BookholderComponent;
  let fixture: ComponentFixture<BookholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
