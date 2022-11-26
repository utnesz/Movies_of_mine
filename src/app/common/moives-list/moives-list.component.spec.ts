import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoivesListComponent } from './moives-list.component';

describe('MoivesListComponent', () => {
  let component: MoivesListComponent;
  let fixture: ComponentFixture<MoivesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoivesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
