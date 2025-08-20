import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

/**
 * TODO: Przeniesc do aua-fe-common
 */
@Component({
  selector: 'rp-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() tytul!: string;
  readonly dzisiaj = format(new Date(), 'EEEE, P', { locale: pl });
}
