export class InvoiceModel {
  constructor(public precioVenta   : number,
              public costoManejo: number,
              public impuesto: number,
              public impuestoVenta: number,
              public valorCompra: number,
              public depositoEntregado: number,
              public depositoAdicional: number,
              public balancePagar: number
  ){}
}
