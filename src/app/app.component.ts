import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';
  color = 'red'
  status = 'no event happened'
  text = ''
  textcolor = 'white'
  allow: boolean = false
  ontextchange: boolean = false
  constructor() {
    setTimeout(() => {
      this.allow = true
      this.color = 'blue'
      if (this.allow) {
        window.alert('button will enable now');
      }
      else {
        window.alert('button will disable now');
      }
    }, 3000)
  }
  onBtnClick() {
    window.alert('Button was clicked and text  ' + this.text + ' was entered');
    this.ontextchange = true
  }
  onUpdate(event: any) {
    this.text = event.target.value;

  }
}
