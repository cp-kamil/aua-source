import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CezButtonsModule, CezFieldErrorModule, CezFormsModule, CezTooltipModule, DialogService } from '@cez/ngx-cez-ui';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoLocaleModule } from '@jsverse/transloco-locale';

import { SHARED_TRANSLOCO_PROVIDER } from '@app/shared/providers/shared.provider';

import { RpConfirmDialogComponent } from './rp-confirm-dialog.component';

@NgModule({
  declarations: [RpConfirmDialogComponent],
  imports: [CommonModule, CezButtonsModule, CezTooltipModule, CezFieldErrorModule, ReactiveFormsModule, CezFormsModule, TranslocoModule, TranslocoLocaleModule],
  exports: [],
  providers: [DialogService, SHARED_TRANSLOCO_PROVIDER],
})
export class RpConfirmDialogModule {}
