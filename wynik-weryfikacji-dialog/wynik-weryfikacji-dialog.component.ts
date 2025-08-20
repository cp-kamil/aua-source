import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogConfig, DynamicDialogService } from '@cez/ngx-cez-ui';

import { WynikWeryfikacjiReceptyType } from '@app/shared/models/types/wynik-weryfikacji.type';
import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';

@Component({
  selector: 'rp-wynik-weryfikacji-dialog',
  templateUrl: './wynik-weryfikacji-dialog.component.html',
  providers: [DynamicDialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WynikWeryfikacjiDialogComponent {
  readonly TRANSLOCO_KEY = SHARED_SECTIONS_TRANSLOCO_KEYS.wynikWeryfikacji;

  wynikWeryfikacji: WynikWeryfikacjiReceptyType[] = [];

  constructor(private config: DialogConfig<WynikWeryfikacjiReceptyType[]>) {
    if (!!config.data?.length) {
      this.wynikWeryfikacji = config.data;
    }
  }
}
