import { RpConfirmDialogComponent } from './rp-confirm-dialog.component';
import { DialogConfig, DynamicDialogRef } from '@cez/ngx-cez-ui';
import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';
import { Subject } from 'rxjs';

describe('RpConfirmDialogComponent', () => {
  let component: RpConfirmDialogComponent;
  let refMock: any;
  let configMock: any;

  beforeEach(() => {
    refMock = {
      onClose: new Subject(),
      onDestroy: new Subject(),
      close: jest.fn(),
    };
    configMock = {
      data: 'Test content',
    };
    component = new RpConfirmDialogComponent(refMock as DynamicDialogRef, configMock as DialogConfig<string>);
  });

  it('should set content from config', () => {
    expect(component.content).toBe('Test content');
  });

  it('should subscribe to onClose and onDestroy in ngOnInit', () => {
    const onCloseSpy = jest.spyOn(refMock.onClose, 'subscribe');
    const onDestroySpy = jest.spyOn(refMock.onDestroy, 'subscribe');

    component.ngOnInit();

    expect(onCloseSpy).toHaveBeenCalled();
    expect(onDestroySpy).toHaveBeenCalled();
  });

  it('should call ref.close(false) when onDestroy emits', () => {
    component.ngOnInit();
    refMock.onDestroy.next();
    expect(refMock.close).toHaveBeenCalledWith(false);
  });

  it('should call ref.close(true) when potwierdz is called', () => {
    component.potwierdz();
    expect(refMock.close).toHaveBeenCalledWith(true);
  });
});
