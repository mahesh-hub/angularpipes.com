import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angularpipes';
  count: number = 234567;
  dcValue: number = 3.6578;
  price: number = 99.99;
  toDay: Date = new Date();
  postObj: object = {
    id: 1,
    postTitle: "post 1"
  }
  objArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6",
  ]

  userdetails = {
    name: "user 1",
    city: "newyork",
    country: "us",
  }

  dummyText:string = "Copying text from VS Code includes the formatting which is nice until you paste into a program that is not very format aware - for me this was Gmail and pasting would always include the formatted text but I just wanted plain-text. Work arounds were annoying so I thought I'd try making an extension for it."

}
