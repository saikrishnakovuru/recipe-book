import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Output() isFeatureClicked: EventEmitter<string> = new EventEmitter<string>();

  public featureClicked(feature: string): void {
    this.isFeatureClicked.emit(feature);
  }

}
