import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyObjectivePopoverPage } from './easy-objective-popover.page';

describe('EasyObjectivePopoverPage', () => {
  let component: EasyObjectivePopoverPage;
  let fixture: ComponentFixture<EasyObjectivePopoverPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyObjectivePopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyObjectivePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
