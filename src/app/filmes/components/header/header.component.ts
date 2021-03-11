import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() tituloFase: string = 'Sem fase definida';
  @Input() infoFase: string = 'Nenhuma informação disponível';

  constructor() { }

}
