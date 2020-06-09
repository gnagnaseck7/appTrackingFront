import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageTestParentPage } from './page-test-parent.page';

describe('PageTestParentPage', () => {
  let component: PageTestParentPage;
  let fixture: ComponentFixture<PageTestParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTestParentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageTestParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
