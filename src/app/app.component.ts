import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

export interface PeriodicElement {
  email: string;
  position: string;
  id: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'https://attachments.clickup.com/profilePictures/67396951_36F.jpg', email: 'john@example.com', id: "001-NAV", action: 'Completed'},
  {position: 'https://attachments.clickup.com/profilePictures/67413889_QxQ.jpg', email: 'xitricon@example.com', id: "001-NAV", action: 'Completed'},
  {position: 'https://attachments.clickup.com/profilePictures/67413889_QxQ.jpg', email: 'xitricon@example.com', id: "001-NAV", action: 'Completed'},
  {position: 'https://attachments.clickup.com/profilePictures/67396951_36F.jpg', email: 'example.com', id: "001-NAV", action: 'Completed'},
  {position: 'https://attachments.clickup.com/profilePictures/67396951_36F.jpg', email: 'testExample.com', id: "001-NAV", action: 'Completed'},

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularThemingTest';

  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
  themeContColor: string[] = [
    'red',
    'blue',
    'green',
  ];

  basetheme: 'red' | 'blue' | 'green' = "red"; // ? notice this
  GradientSelector : 'none'|'linear-gradient(180deg, hsla(0, 100%, 52%, 1) 0%, hsla(0, 91%, 18%, 1) 100%)' |'linear-gradient(180deg, hsla(194, 89%, 39%, 1) 0%, hsla(239, 71%, 15%, 1) 100%)'|'linear-gradient(90deg, hsla(109, 88%, 73%, 1) 0%, hsla(160, 55%, 44%, 1) 100%)'  = 'none'; 
  isDark = false; // ? notice this
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {}

  // ? notice below
  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }


  displayedColumns: string[] = ['position', 'email', 'id', 'action'];
  dataSource = ELEMENT_DATA;
  
}
