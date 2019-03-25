import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateviewFactoryComponent } from './createview.component';

describe('CreateviewFactoryComponent', () => {
  let component: CreateviewFactoryComponent;
  let fixture: ComponentFixture<CreateviewFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateviewFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateviewFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
