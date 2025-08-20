import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CezButtonsModule, CezLabelComponent } from '@cez/ngx-cez-ui';

import { CezMultipleButtonsComponent } from '@shared/components/cez-multiple-buttons/cez-multiple-buttons.component';

@NgModule({
  imports: [CommonModule, CezButtonsModule, CezLabelComponent],
  declarations: [CezMultipleButtonsComponent],
  exports: [CezMultipleButtonsComponent],
})
export class CezMultipleButtonsModule {}
