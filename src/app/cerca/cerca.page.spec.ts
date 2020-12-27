import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CercaPage } from './cerca.page';

describe('CercaPage', () => {
  let component: CercaPage;
  let fixture: ComponentFixture<CercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
