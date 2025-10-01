import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html',
    standalone: true,
    imports: [AccordionModule]
})
export class AccordionBasicDemo {}