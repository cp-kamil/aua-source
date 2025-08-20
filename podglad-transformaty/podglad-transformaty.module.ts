import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CezButtonsModule, CezTooltipModule, DynamicDialogService } from '@cez/ngx-cez-ui';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoLocaleModule } from '@jsverse/transloco-locale';

import { SHARED_TRANSLOCO_PROVIDER } from '@app/shared/providers/shared.provider';
import { DownloadFileService } from '@app/shared/services/download-file.service';
import { PodgladTransformatyService } from '@app/shared/services/podglad-transformaty.service';

import { PodgladTransformatyComponent } from './podglad-transformaty.component';
import { RpPdfViewerModule } from '../pdf-viewer/pdf-viewer.module';

@NgModule({
  declarations: [PodgladTransformatyComponent],
  imports: [CommonModule, RpPdfViewerModule, CezTooltipModule, TranslocoModule, TranslocoLocaleModule, CezButtonsModule],
  exports: [],
  providers: [DynamicDialogService, SHARED_TRANSLOCO_PROVIDER, DownloadFileService, PodgladTransformatyService],
})
export class PodgladTransformatyModule {}
