import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogConfig, DynamicDialogRef, DynamicDialogService } from '@cez/ngx-cez-ui';

import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';

@Component({
  selector: 'rp-confirm-dialog',
  templateUrl: './rp-confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DynamicDialogService],
})
export class RpConfirmDialogComponent implements OnInit {
  readonly TRANSLOCO_KEY = SHARED_SECTIONS_TRANSLOCO_KEYS.confirmDialog;

  content!: string;

  constructor(
    private ref: DynamicDialogRef,
    private config: DialogConfig<string>
  ) {
    this.content = this.config.data!;
  }

  public ngOnInit(): void {
    // Nasłuchiwanie na zamknięcie dialogu za pomocą onClose
    this.ref.onClose.subscribe(result => {});

    // Nasłuchiwanie na zniszczenie dialogu za pomocą onDestroy
    this.ref.onDestroy.subscribe(() => {
      this.ref.close(false); // Zwraca false, jeśli dialog został zniszczony (np. przyciskiem X)
    });
  }

  public potwierdz(): void {
    this.ref.close(true);
  }
}
