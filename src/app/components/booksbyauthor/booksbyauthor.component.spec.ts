import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksbyauthorComponent } from './booksbyauthor.component';

describe('BooksbyauthorComponent', () => {
  let component: BooksbyauthorComponent;
  let fixture: ComponentFixture<BooksbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksbyauthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
