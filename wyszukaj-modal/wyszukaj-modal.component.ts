import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogConfig } from '@cez/ngx-cez-ui';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'rp-wyszukaj-modal',
  templateUrl: './wyszukaj-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WyszukajModalComponent {
  constructor(private _config: DialogConfig) {}
}
