import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BibleReaderComponent } from './bible-reader.component';

describe('BibleReaderComponent', () => {
  let component: BibleReaderComponent;
  let fixture: ComponentFixture<BibleReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleReaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
