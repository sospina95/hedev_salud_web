import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailviewFactoryComponent } from './detailview.component';

describe('DetailviewFactoryComponent', () => {
  let component: DetailviewFactoryComponent;
  let fixture: ComponentFixture<DetailviewFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailviewFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailviewFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
