import { Component } from '@angular/core';
import { InvoiceModel } from './invoice-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'acosta-calculator';
  invoice = new InvoiceModel(0,0,0,0,0,0, 0)

  precioUpdated() {
    this.invoice.costoManejo = this.invoice.precioVenta * 0.05;
    this.invoice.impuestoVenta = ((this.invoice.costoManejo + this.invoice.precioVenta) * 0.0635)
    this.invoice.valorCompra = this.invoice.precioVenta + this.invoice.costoManejo + this.invoice.impuestoVenta;
    this.invoice.balancePagar = this.invoice.valorCompra - (this.invoice.depositoEntregado + this.invoice.depositoAdicional);
  }

  manejoUpdated() {
    this.invoice.impuestoVenta = (this.invoice.costoManejo + this.invoice.precioVenta) * 0.0635;
    this.invoice.valorCompra = this.invoice.precioVenta + this.invoice.costoManejo + this.invoice.impuestoVenta;
    this.invoice.balancePagar = this.invoice.valorCompra - (this.invoice.depositoEntregado + this.invoice.depositoAdicional);
  }


}
