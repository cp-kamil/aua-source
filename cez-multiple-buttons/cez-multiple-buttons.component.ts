import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IdValuePairInterface } from '@p1/aua-fe-shared';
import { AbstractCustomControlComponentBase, AnyFormValue } from '@p1/dynamic-forms';

type CezMultipleButtonsConfig = {
  onClick: (group: UntypedFormGroup, value: IdValuePairInterface<string, number>) => void;
  values: IdValuePairInterface<string, number>[];
  czyWyrownanie?: boolean;
};

/**
 * TODO: Przeniesc do aua-fe-common
 */
@Component({
  selector: 'rp-cez-multiple-buttons',
  templateUrl: './cez-multiple-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .cez-btn:not(.cez-btn-icon--self) {
        width: 40px;
        min-width: initial;
        max-width: initial;
        padding: 7px 0px;
      }
    `,
  ],
})
@UntilDestroy()
export class CezMultipleButtonsComponent extends AbstractCustomControlComponentBase<AnyFormValue, CezMultipleButtonsConfig> implements OnInit {
  public get czyWyrownanie(): boolean {
    return this.config.czyWyrownanie ?? true;
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

  public writeValue(): undefined {
    return undefined;
  }

  public handleButtonClick(value: IdValuePairInterface<string, number>): void {
    this.config.onClick(this.formGroup, value);
  }
}
