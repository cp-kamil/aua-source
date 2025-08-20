import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WyszukajModalComponent } from './wyszukaj-modal.component';
import { DialogConfig } from '@cez/ngx-cez-ui';

describe('WyszukajModalComponent', () => {
  let component: WyszukajModalComponent;
  let fixture: ComponentFixture<WyszukajModalComponent>;
  let dialogConfigStub: Partial<DialogConfig>;

  beforeEach(async () => {
    dialogConfigStub = {};
    await TestBed.configureTestingModule({
      declarations: [WyszukajModalComponent],
      providers: [
        { provide: DialogConfig, useValue: dialogConfigStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WyszukajModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
