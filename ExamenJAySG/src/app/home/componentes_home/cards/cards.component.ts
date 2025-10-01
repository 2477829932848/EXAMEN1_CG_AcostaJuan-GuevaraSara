import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'card',
    templateUrl: './cards.component.html',
    standalone: true,
    imports: [CardModule, ButtonModule]
})
export class CardAdvancedDemo {}