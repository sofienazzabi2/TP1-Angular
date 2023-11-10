import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowMiniWordComponent } from './rainbow-mini-word.component';

describe('RainbowMiniWordComponent', () => {
  let component: RainbowMiniWordComponent;
  let fixture: ComponentFixture<RainbowMiniWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainbowMiniWordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RainbowMiniWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
