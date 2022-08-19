import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmenuComponent } from './lmenu.component';

describe('LmenuComponent', () => {
  let component: LmenuComponent;
  let fixture: ComponentFixture<LmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
