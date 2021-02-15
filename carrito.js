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
        const element =   new document.createElement('div');
        element.innerHTML= `
                          <div class="card text-center mb-4">

                         <div class="card-body"> 
                           
                         <strong>Product name:</strong>: ${product.name}
                         <strong>Product price:</strong>: ${product.price}
                         <strong>Product year:</strong>: ${product.year}
                         <a href="#" class="btn btn-danger" name="delete">delete</a>
                         </div>

                          </div>
                            `;
              productlist.appendChild(element);
              this.resetform();

         
       }

       resetform (){
           document.getElementById('product-form').reset();

       }


    deleteproduct (element) {
      if (element.name==='delete')
      {
          console.log(element.parentElement.parentElement.parentElement.remove())
      }
    }

    showmessage(message,cssClass){
     const div=document.createElement('div');
     div.className=`alert alert-$(cssClass)`;
     div.appendChild(document.createTextNode(message));
     //mostrar en el dom
   const container= document.querySelector('.container');

    }
}

sessionStorage.setItem("products",JSON.stringify(product));

let parseproducts=JSON.parse(sessionStorage.getItem(product));

// DOM events

document.getElementById('product-form').addEventListener('submit',function(e)
                                                                {    
                                                                    e.preventDefault();
                                                                     const name=document.getElementById('name').value;
                                                                     const price=document.getElementById('price').value;
                                                                     const year=document.getElementById('year').value;

                                                                    
                                                                     
                                                                     const product_=new product(name,price,year);
                                                                     const ui=new UI();
                                                                     ui.addproduct(product_);
                                                                    
                                                                     
                                                                 });

                                                                 document.getElementById('prodct-list').addEventListener('click',function(e)
                                                                                                                                  {
                                                                                                                                     const ui=new UI ();
                                                                                                                                     ui.deleteproduct(e.target);

                                                                                                                                  }            );



