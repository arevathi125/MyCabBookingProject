import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegiterComponent } from './user-regiter.component';

describe('UserRegiterComponent', () => {
  let component: UserRegiterComponent;
  let fixture: ComponentFixture<UserRegiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegiterComponent]
    });
    fixture = TestBed.createComponent(UserRegiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
