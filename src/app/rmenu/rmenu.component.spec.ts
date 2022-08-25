import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmenuComponent } from './rmenu.component';

describe('RmenuComponent', () => {
  let component: RmenuComponent;
  let fixture: ComponentFixture<RmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
