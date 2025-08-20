import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DialogConfig, DynamicDialogRef, DynamicDialogService } from '@cez/ngx-cez-ui';
import { DateFormatEnum } from '@p1/utils';

import { SHARED_TRANSLOCO_KEY } from '@app/shared/providers/shared.provider';

import { PowodDialogConfigType } from './models/types/powod-dialog-config.type';
import { PowodType } from './models/types/powod.type';

@Component({
  selector: 'rp-powod',
  templateUrl: './powod.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DynamicDialogService],
})
export class PowodComponent {
  readonly TRANSLOCO_KEY = SHARED_TRANSLOCO_KEY;
  readonly DateFormatEnum = DateFormatEnum;

  readonly formControlNames: Record<keyof PowodType, keyof PowodType> = {
    powod: 'powod',
  };

  form = this.fb.group({
    [this.formControlNames.powod]: [null, Validators.required],
  });

  numerRecepty!: string;
  dataWystawieniaRecepty!: string;

  constructor(private fb: FormBuilder, private ref: DynamicDialogRef, private config: DialogConfig<PowodDialogConfigType>) {
    const { numerRecepty, dataWystawieniaRecepty } = this.config.data!;
    this.dataWystawieniaRecepty = dataWystawieniaRecepty;
    this.numerRecepty = numerRecepty;
  }

  public get powod(): AbstractControl {
    return this.form.controls.powod!;
  }

  public potwierdz(): void {
    this.ref.close(this.powod.value);
  }
}
