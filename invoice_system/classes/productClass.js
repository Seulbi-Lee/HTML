class invoice {
  constructor(id, pname, price){
    this.id = id;
    this.pname = pname;
    this.price = price;
  }
  toRow(){
    let tr = $('<tr></tr>')
    tr.append(`
    <td>${value.id}</td>
    <td>${value.pname}</td>
    <td>${value.price}</td>
    `)
  }
}
export default invoice;