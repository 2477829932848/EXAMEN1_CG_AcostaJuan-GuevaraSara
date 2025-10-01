import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true,
  imports: [ToastModule, ButtonModule],
  providers: [MessageService]
})
export class DetailsComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Operación realizada con éxito' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Información adicional' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Advertencia detectada' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error' });
  }
}
