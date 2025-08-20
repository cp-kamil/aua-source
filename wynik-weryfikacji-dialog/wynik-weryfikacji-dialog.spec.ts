import { WynikWeryfikacjiDialogComponent } from './wynik-weryfikacji-dialog.component';
import { DialogConfig } from '@cez/ngx-cez-ui';
import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';
import { WynikWeryfikacjiReceptyType } from '@app/shared/models/types/wynik-weryfikacji.type';

describe('WynikWeryfikacjiDialogComponent', () => {
  let component: WynikWeryfikacjiDialogComponent;

  const mockData: WynikWeryfikacjiReceptyType[] = [
    { id: 1, status: 'OK' } as WynikWeryfikacjiReceptyType,
    { id: 2, status: 'ERROR' } as WynikWeryfikacjiReceptyType,
  ];

  function createComponent(data?: WynikWeryfikacjiReceptyType[]) {
    const config = { data } as DialogConfig<WynikWeryfikacjiReceptyType[]>;
    return new WynikWeryfikacjiDialogComponent(config);
  }

  it('should create the component', () => {
    component = createComponent();
    expect(component).toBeTruthy();
  });

  it('should set TRANSLOCO_KEY from provider', () => {
    component = createComponent();
    expect(component.TRANSLOCO_KEY).toBe(SHARED_SECTIONS_TRANSLOCO_KEYS.wynikWeryfikacji);
  });

  it('should set wynikWeryfikacji from config data if present', () => {
    component = createComponent(mockData);
    expect(component.wynikWeryfikacji).toEqual(mockData);
  });

  it('should set wynikWeryfikacji to empty array if config data is empty', () => {
    component = createComponent([]);
    expect(component.wynikWeryfikacji).toEqual([]);
  });

  it('should set wynikWeryfikacji to empty array if config data is undefined', () => {
    component = createComponent(undefined);
    expect(component.wynikWeryfikacji).toEqual([]);
  });
});
