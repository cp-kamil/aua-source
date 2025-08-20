import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogConfig, DynamicDialogRef, DynamicDialogService } from '@cez/ngx-cez-ui';

import { TypDokumentuPdfEnum } from '@app/shared/enums/rodzaj-dokumentu-pdf.enum';
import { PodgladTransformatyConfigModalType, PogladTransformatyButtonConfig } from '@app/shared/models/types/podglad-transformaty-config-modal.type';
import { SHARED_SECTIONS_TRANSLOCO_KEYS } from '@app/shared/providers/shared.provider';

@Component({
  selector: 'rp-podglad-transformaty',
  templateUrl: './podglad-transformaty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DynamicDialogService],
})
export class PodgladTransformatyComponent {
  readonly TRANSLOCO_KEY = SHARED_SECTIONS_TRANSLOCO_KEYS.podgladTransformaty;
  readonly TypDokumentuPdfEnum = TypDokumentuPdfEnum;

  transformata!: string;
  cssContainerClass!: string;
  buttons!: PogladTransformatyButtonConfig[];
  showActionButtons = false;

  constructor(
    private ref: DynamicDialogRef,
    private config: DialogConfig<PodgladTransformatyConfigModalType>,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    const { transformata: dane, cssContainerClass, showActionButtons, buttons } = this.config.data!;
    this.transformata = dane;
    this.buttons = buttons || [];
    this.showActionButtons = !!showActionButtons;
    this.cssContainerClass = cssContainerClass;
  }

  public onButtonEvent(button: PogladTransformatyButtonConfig): void {
    button?.callback!();
    if (button?.closeOnCallback) {
      this.ref.close();
    }
  }
}
