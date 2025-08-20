import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { getUnixTime } from 'date-fns';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

import { TypDokumentuPdfEnum } from '@app/shared/enums/rodzaj-dokumentu-pdf.enum';
import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';
import { PdfViewerService } from '@app/shared/services/pdf-viewer.service';

@Component({
  selector: 'rp-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styles: [
    `
      .viewer-container {
        flex: 1;
        margin-bottom: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RpPdfViewerComponent {
  private readonly TYP_DOKUMENTU: string = 'application/pdf';
  @ViewChild('pdfViewerAutoLoad', { static: true }) pdfViewerAutoLoad!: PdfJsViewerComponent;

  @Input() cssContainerClass = 'c-col-12 c-p-0';
  @Input() cssContainerHeightClass = 'viewer-container';
  @Input() isPrintable = false;
  @Input() isDownloadable = false;

  @Input() public set fileName(nazwa: TypDokumentuPdfEnum) {
    this.name = `${TypDokumentuPdfEnum[nazwa]}-${getUnixTime(new Date())}`;
  }

  @Input() public set base64(base64: string) {
    if (base64) {
      this.pdfSrc = new Blob([this.pdfViewerService.onDecodeBase64(base64)], { type: this.TYP_DOKUMENTU });
      this.pdfViewerAutoLoad.pdfSrc = this.pdfSrc;
      this.pdfViewerAutoLoad.refresh();
    }
  }

  @Input() public set sciezka(sciezka: string) {
    if (sciezka) {
      this.pdfViewerAutoLoad.pdfSrc = sciezka;
      this.pdfViewerAutoLoad.refresh();
    }
  }

  pdfSrc!: string | Blob | Uint8Array;
  name = `${TypDokumentuPdfEnum[TypDokumentuPdfEnum.DOKUMENT]}-${getUnixTime(new Date())}`;
  readonly translationPath = SHARED_SECTIONS_TRANSLOCO_KEYS.pdfViewer + '.';

  constructor(private pdfViewerService: PdfViewerService) {}
}
