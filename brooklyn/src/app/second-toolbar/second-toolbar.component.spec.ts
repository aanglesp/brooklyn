import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondToolbarComponent } from './second-toolbar.component';

describe('SecondToolbarComponent', () => {
  let component: SecondToolbarComponent;
  let fixture: ComponentFixture<SecondToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
