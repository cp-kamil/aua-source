import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CezButtonsModule, CezCommonModule, CezTooltipModule, DynamicDialogService } from '@cez/ngx-cez-ui';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoLocaleModule } from '@jsverse/transloco-locale';

import { SHARED_TRANSLOCO_PROVIDER } from '@app/shared/providers/shared.provider';

import { WynikWeryfikacjiDialogComponent } from './wynik-weryfikacji-dialog.component';

@NgModule({
  declarations: [WynikWeryfikacjiDialogComponent],
  imports: [CommonModule, CezCommonModule, CezButtonsModule, CezTooltipModule, TranslocoModule, TranslocoLocaleModule],
  exports: [],
  providers: [DynamicDialogService, SHARED_TRANSLOCO_PROVIDER],
})
export class WynikWeryfikacjiDialogModule {}
