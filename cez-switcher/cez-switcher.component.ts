import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IdValuePairInterface } from '@p1/aua-fe-shared';
import { AbstractCustomControlComponentBase } from '@p1/dynamic-forms';

import { CezSwitcherOptionsType } from '@app/shared/models/types/cez-swicher-options.type';
import { SHARED_TRANSLOCO_KEY } from '@app/shared/providers/shared.provider';

@Component({
  selector: 'rp-cez-switcher',
  templateUrl: './cez-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CezSwitcherComponent extends AbstractCustomControlComponentBase<string, CezSwitcherOptionsType> implements OnInit {
  translocoKey = SHARED_TRANSLOCO_KEY;
  options: IdValuePairInterface<string, string>[] = [];
  header!: string;
  selectedIndex = 0;

  constructor() {
    super();
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.options = (<CezSwitcherOptionsType>this.formItem?.config)!['options'] || [];
    this.header = <string>this.formItem?.config!['header']!;
    const translocoKey = <string>this.formItem?.config!['translocoKey']!;
    if (translocoKey) {
      this.translocoKey = translocoKey;
    }
    if (!this.formControl.value) {
      this.formControl.setValue(this.options[0].value);
    }
    this.selectedIndex = this.options.findIndex(option => option.value === this.formControl.value) || 0;
  }

  public writeValue(): undefined {
    return undefined;
  }

  public onRodzajLekuChange(id: number): void {
    this.formControl.setValue(this.options[id].value);
    this.selectedIndex = id;
  }
}
