import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCreerActiviteContainerComponent } from './modal-creer-activite-container.component';

describe('ModalCreerActiviteContainerComponent', () => {
  let component: ModalCreerActiviteContainerComponent;
  let fixture: ComponentFixture<ModalCreerActiviteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreerActiviteContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreerActiviteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
