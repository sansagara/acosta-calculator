import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { InvoiceModel } from './invoice-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  invoice = new InvoiceModel(0,0,6.35,0,0,0,0, 0);

  selectText($event) {
    $event.target.select();
  }

  precioUpdated() {
    this.invoice.costoManejo = + (this.invoice.precioVenta * 0.05).toFixed(2);
    this.manejoUpdated();
  }

  manejoUpdated() {
    this.invoice.impuestoVenta = + ((this.invoice.costoManejo + this.invoice.precioVenta) * (this.invoice.impuesto/100)).toFixed(2);
    this.invoice.valorCompra = + (this.invoice.precioVenta + this.invoice.costoManejo + this.invoice.impuestoVenta).toFixed(2);
    this.depositoUpdated();
  }

  depositoUpdated() {
    this.invoice.balancePagar = + (this.invoice.valorCompra - (this.invoice.depositoEntregado + this.invoice.depositoAdicional)).toFixed(2);
  }

  impuestoUpdated() {
    this.manejoUpdated();
  }



}
