class Product {
  constructor(id, pname, price){
    this.id = id;
    this.pname = pname;
    this.price = price;
  }
  toRow(){
    const tr = $('<tr class="table-primary"></tr>');
    $.each(this,(_, value)=>{
      tr.append($(`<td>${value}</td>`))
    })
    return tr;
  }
}
export default Product;