import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuCardComponent } from './aside-menu-card.component';

describe('AsideMenuCardComponent', () => {
  let component: AsideMenuCardComponent;
  let fixture: ComponentFixture<AsideMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideMenuCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
