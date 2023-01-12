import {Component, Input} from "@angular/core";
import {NgIf} from "@angular/common";

export interface GotCharacter {
  name: string;
  color: 'red' | 'black' | 'green';
}

@Component({
  selector: 'app-got-character',
  template: `
    <div *ngIf="expandInitially" class="got-character" style="--level: {{level}};" (click)="toggle()">
      <div class="image-placeholder  {{character?.color}}"></div>
      {{character?.name}}
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      margin-top: 5px;
    }

    .got-character {
      display: flex;
      align-items: center;
      border: 0.5px solid lightgrey;
      border-radius: 5px;
      padding: 5px;
      box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;
      margin-left: calc(var(--level) * 20px);
      cursor: pointer;
    }

    .image-placeholder {
      width: 25px;
      height: 25px;
      margin-right: 20px;
      background-color: #ccc;
      border-radius: 100%;

      &.red {
        background-color: red;
      }

      &.black {
        background-color: black;
      }

      &.green {
        background-color: green;
      }
    }

  `],
  imports: [
    NgIf
  ],
  standalone: true
})
export class GotCharacterComponent {
  @Input() character: GotCharacter | undefined;
  @Input() level: number | undefined;
  @Input() expandInitially = false;
  expand = false;

  toggle(){
    this.expand = !this.expand;
  }
}
