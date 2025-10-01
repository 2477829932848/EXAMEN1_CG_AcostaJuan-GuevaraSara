import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'imagen',
    templateUrl: './image.component.html',
    standalone: true,
    imports: [ImageModule]
})
export class ImageTemplateDemo {}