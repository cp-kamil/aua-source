import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PowodComponent } from './powod.component';
import { DynamicDialogRef, DialogConfig, DynamicDialogService } from '@cez/ngx-cez-ui';
import { PowodDialogConfigType } from './models/types/powoddescribe('PowodComponent', () => {
  let component: PowodComponent;
  let dialogRefMock: jasmine.SpyObj<DynamicDialogRef>;
  let dialogConfigMock: DialogConfig<PowodDialogConfigType>;

  beforeEach(() => {
    dialogRefMock = jasmine.createSpyObj('DynamicDialogRef', ['close']);
    dialogConfigMock = {
      data: {
        numerRecepty: '123456',
        dataWystawieniaRecepty: '2024-06-01'
      }
    } as DialogConfig<PowodDialogConfigType>;

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        DynamicDialogService,
        { provide: DynamicDialogRef, useValue: dialogRefMock },
        { provide: DialogConfig, useValue: dialogConfigMock }
      ]
    });

    const fb = TestBed.inject(FormBuilder);
    component = new PowodComponent(fb, dialogRefMock, dialogConfigMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize numerRecepty and dataWystawieniaRecepty from config', () => {
    expect(component.numerRecepty).toBe('123456');
    expect(component.dataWystawieniaRecepty).toBe('2024-06-01');
  });

  it('should have a required powod control', () => {
    const powodControl = component.form.get('powod');
    expect(powodControl).toBeTruthy();
    powodControl!.setValue(null);
    expect(powodControl!.valid).toBe(false);
    powodControl!.setValue('Some reason');
    expect(powodControl!.valid).toBe(true);
  });

  it('should close dialog with powod value on potwierdz', () => {
    component.form.get('powod')!.setValue('Test reason');
    component.potwierdz();
    expect(dialogRefMock.close).toHaveBeenCalledWith('Test reason');
  });
});
