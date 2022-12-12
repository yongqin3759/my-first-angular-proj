import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  @Output() changePage = new EventEmitter<string>()

  goTo(page: string){
    this.changePage.emit(page)
  }
}