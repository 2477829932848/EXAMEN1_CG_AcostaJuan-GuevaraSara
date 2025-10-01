
import { Component } from '@angular/core';
import { ButtonBasicDemo } from './componentes_home/button/button.component';
import { CardAdvancedDemo } from './componentes_home/cards/cards.component';
import { ImageTemplateDemo } from './componentes_home/image/image.component';
import { AccordionBasicDemo } from './componentes_home/accordion/accordion.component';
import { InputTextBasicDemo } from './componentes_home/input-text/input-text.component';
import { MenubarTemplateDemo } from './componentes_home/menu-bar/menu-bar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports : [
    ButtonBasicDemo,
    CardAdvancedDemo,
    ImageTemplateDemo,
    AccordionBasicDemo,
    InputTextBasicDemo,
    MenubarTemplateDemo
  ]
});
export class HomeComponent {
  // Datos de menú
  items = [
    {
      label: 'Inicio', routerLink: '/home'
    },
    {
      label: 'Características'
    },
    {
      label: 'Proyectos',
      items: [
        { label: 'Software a la medida' },
        { label: 'Desarrollo móvil' },
        { label: 'Soporte a aplicaciones' }
      ]
    },
    {
      label: 'Contacto'
    }
  ];

  // Datos de cards
  services = [
    {
      title: 'Desarrollo de software a la medida',
      img: 'assets/software.png',
      desc: 'Creamos soluciones adaptadas a tus necesidades.'
    },
    {
      title: 'Desarrollo móvil',
      img: 'assets/mobile.png',
      desc: 'Aplicaciones móviles para iOS y Android.'
    },
    {
      title: 'Soporte a aplicaciones',
      img: 'assets/support.png',
      desc: 'Mantenimiento y optimización de sistemas existentes.'
    }
  ];
}
