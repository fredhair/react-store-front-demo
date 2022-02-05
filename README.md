# Store front Demo

React Version of a simple store front. Angular version coming soon.

### The App:

There is a very basic Express server in the _SERVER_ folder that will need to be spun up before starting the front end app.


There is also a really basic PHP CLI app (in the _PRODUCTS_GENERATOR_CLI_ folder) that can be used to generate products (which I used to generate the products in this demo).

To use the CLI:
> - Install dependency with composer
> - Run 'php generator.php'
> - You can use -c to specify a product count (the default is 10)
> - To output to a file on Windows & Unix based systems append '> products.json' to the command
