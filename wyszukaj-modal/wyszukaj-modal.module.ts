import { NgModule } from '@angular/core';

import { WyszukajModule } from '@app/wyszukaj/wyszukaj.module';

import { WyszukajModalComponent } from './wyszukaj-modal.component';

@NgModule({
  imports: [WyszukajModule],
  declarations: [WyszukajModalComponent],
  exports: [WyszukajModalComponent],
})
export class WyszukajModalModule {}
