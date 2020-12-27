import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitaPage } from './invita.page';

describe('InvitaPage', () => {
  let component: InvitaPage;
  let fixture: ComponentFixture<InvitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
