import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoivesEditorComponent } from './moives-editor.component';

describe('MoivesEditorComponent', () => {
  let component: MoivesEditorComponent;
  let fixture: ComponentFixture<MoivesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoivesEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoivesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
