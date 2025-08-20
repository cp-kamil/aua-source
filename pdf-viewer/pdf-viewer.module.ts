import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CezButtonsModule } from '@cez/ngx-cez-ui';
import { TranslocoModule } from '@jsverse/transloco';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { PdfViewerService } from '@app/shared/services/pdf-viewer.service';

import { RpPdfViewerComponent } from './pdf-viewer.component';

@NgModule({
  imports: [CommonModule, PdfJsViewerModule, CezButtonsModule, TranslocoModule],
  exports: [RpPdfViewerComponent],
  declarations: [RpPdfViewerComponent],
  providers: [PdfViewerService],
})
export class RpPdfViewerModule {}
