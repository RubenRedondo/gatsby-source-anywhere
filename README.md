# gatsby-source-anywhere

A Gatsby source plugin for fetchig data from anywhere on the internet.

## Installation

Use the package manager [npm] to install it.

```bash
npm install gatsby-source-anywhere
```

## Usage

```js
//In your gatsby-config.js
plugins : [
   {
     resolve: 'gatsby-source-anywhere',
     options : {
        {
            nodeType : "User", //What Type of node do you want to create
            apiUrl: "https://api.com/users", //Url of your API
            option : "users" //If the response has an especific field that you want to get
        },
        {
            // Specify as types as you need
            nodeType : "Product",
            apiUrl: "https://api.com/products",
            option : "products"
        },
    }
        
]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

