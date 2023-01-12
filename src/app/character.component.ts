import {Component, Input, TemplateRef} from "@angular/core";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";

export interface Character {
  icon: string;
  heading: string | TemplateRef<any>;
  headingData: any;
  children?: Character[];
  templateExpandIcon: string;
  template?: TemplateRef<any>;
  templateData?: any;
  actionIcon?: string;
  actionCallback: () => void;
}

@Component({
  selector: 'character',
  template: `
    <div class="character">
      {{character?.name}}
      <button (click)="expanded = !expanded">Expand</button>
      <button *ngIf="character?.template" (click)="toggleTemplate = !toggleTemplate">Toggle template</button>
      <ng-container [ngTemplateOutlet]="$any(character?.template)" [ngTemplateOutletContext]="{$implicit: character?.data}" *ngIf="toggleTemplate"></ng-container>
      <div class="wrapper" *ngIf="character?.children?.length && expanded">
        <character *ngFor="let child of character?.children" [character]="child"></character>
      </div>
    </div>
  `,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet
  ],
  styles: [`
    .wrapper {
      margin-left: 20px;
    }
  `],
  standalone: true
})
export class CharacterComponent {
  @Input() character: Character | undefined;
  expanded = false;
  toggleTemplate = false;
}
