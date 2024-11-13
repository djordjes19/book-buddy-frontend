import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBookComponent } from './ai-book.component';

describe('AiBookComponent', () => {
  let component: AiBookComponent;
  let fixture: ComponentFixture<AiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
