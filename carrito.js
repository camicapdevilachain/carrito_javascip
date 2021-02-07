class product 
{
    constructor (name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;

    }

    
}



class UI {
    addproduct(product)
       {

        const productlist=document.getElementById('product.list');
        const element =  document.createElement('div');
        element.innerHTML= `
                          <div class="card text-center mb-4">

                         <div class="card-body"> 
                           
                         <strong>Product name:</strong>: ${product.name}
                         <strong>Product price:</strong>: ${product.price}
                         <strong>Product year:</strong>: ${product.year}
                         
                         </div>

                          </div>
                            `;
              productlist.appendChild(element);
         
       }

    deleteproduct () {

    }

    showmessage(){

    }
}


// DOM events

document.getElementById('product-form').addEventListener('submit',function(e)
                                                                { 
                                                                     const name=document.getElementById('name').value;
                                                                     const price=document.getElementById('price').value;
                                                                     const year=document.getElementById('year').value;

                                                                    
                                                                     
                                                                     const product=new product(name,price,year);
                                                                     const ui=new UI();
                                                                     ui.addproduct(product);

                                                                     e.preventDefault();
                                                                 })



