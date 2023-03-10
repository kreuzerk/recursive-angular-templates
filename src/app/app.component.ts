import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('template', {static: true}) myInput: TemplateRef<any> | undefined;

  gotFamilytree: any[] = [];

  ngOnInit(): void {
    this.gotFamilytree = [
      {
        name: 'Ned Stark',
        color: 'green',
        template: this.myInput,
        data: {
          name: 'Ned Stark'
        },
        children: [
          {
            name: 'Robb Stark',
            color: 'green',
            children: []
          },
          {
            name: 'Brandan Stark',
            color: 'green',
            children: []
          },
          {
            name: 'Sansa Stark',
            color: 'green',
            children: []
          },
          {
            name: 'Aria Stark',
            color: 'green',
            children: []
          }
        ]
      },
      {
        name: 'Tywin Lannister',
        color: 'red',
        children: [
          {
            name: 'Cersei Lannister',
            color: 'red',
            children: []
          },
          {
            name: 'Jaime Lannister',
            color: 'red',
            children: []
          },
          {
            name: 'Tyrion Lannister',
            color: 'red',
            children: []
          }
        ]
      },
      {
        name: 'Viserys Targaryen',
        color: 'black',
        children: [
          {
            name: 'Rhaenyra Targaryen',
            color: 'black',
            children: [
              {
                name: 'Aegon Targaryen',
                color: 'black',
                children: []
              },
              {
                name: 'Daenerys Targaryen',
                color: 'black',
                children: []
              },
              {
                name: 'Rhaegar Targaryen',
                color: 'black',
                children: []
              }
            ]
          }
        ]
      }
    ]

  }

}
