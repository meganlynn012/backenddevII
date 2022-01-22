//This handles getting the data for the products on the site.
//It sends the data using the module.exports code to send the entire class
//The controller uses a require() function to reference this file and get the data.

//fs is filesystem. This is a built in function to access the file system.
const fs = require('fs');

//This is a module required for working with file and directory paths. I don't exactly what it does, but it's necessary.
const path = require('path');

const Cart = require('./cart');

//path.join('/foo', 'bar', 'bz/asdf') This joins the file names together.
const p = path.join(
  //path.dirname is a function that returns the director name of a path. 
  //This whole function makes p = the directory name data/products.json
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  //fs was declared earlier, so now the fs.readFile funtion will read the file system.
  //This function either creates a new file, if one doesn't exist, or parses the information found in the file.
  //p is the filename as declared above so it knows where to look.
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

//This constructor function assigns variable names to the objects found in the products.json file and exports the class Product to be used in the controller.
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    //This is still in the contructor function. Below, an id is created or updated.
    //Calls getProductsFromFile function to get the products data
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
              //the id is pushed to the array
        products.push(this);
              //this updated the array in the JSON file with the id information.
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      //the .findIndex method goes through the products array to find the matching id and get the index number.
      //const productIndex = products.findIndex(prod => prod.id === id);
      //or we can use the filter method to find all the products not equal to the id
      const updatedProducts = products.filter(prod => prod.id !== id);
      //now write the updated array to the products.json file. 
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};


