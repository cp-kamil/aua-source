import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CezCommonModule, CezTabsModule } from '@cez/ngx-cez-ui';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoLocaleModule } from '@jsverse/transloco-locale';

import { CezSwitcherComponent } from './cez-switcher.component';

@NgModule({
  declarations: [CezSwitcherComponent],
  imports: [CommonModule, CezTabsModule, CezCommonModule, TranslocoModule, TranslocoLocaleModule],
})
export class CezSwitcherModule {}
