#Feedo

Feedo is a simple Node.js + MongoDB app. It also uses Jade as the template engine.

- - -
##Getting Started
1. Install Node.js from [http://Nodejs.org/](http://Nodejs.org/)
2. Install NPM from [http://www.npmjs.org/](http://www.npmjs.org/)
3. Install MongoDB from [http://www.mongodb.org/](http://www.mongodb.org/)

##Installing Modules
You can install all the required modules by opening the project folder and typing:

``` bash
$ npm install
```

Note you need to set path of python for using node-gyp. It currently supports Python 2.x as of now. For more details refer to this link: [https://github.com/TooTallNate/node-gyp](https://github.com/TooTallNate/node-gyp)

##Downloading and Importing Database
Download and extract the database from [https://www.dropbox.com/s/p8ueemqqfpp9q4u/article_dump.json.tar.bz2](https://www.dropbox.com/s/p8ueemqqfpp9q4u/article_dump.json.tar.bz2)

Extract the JSON file and import the same into MongoDB using the following command in the MongoDB console.

```
mongoimport -d test -c articles <parth-to-json-file>.json
```
where test is database name and articles is the collection name.

##Starting the server

Finally when you have imported the database, start the server by executing the following command:

```
node app.js
```

If everything went right, you should see something like this:

```
Express server listening on port 3000
```

Finally open this URL in browser [http://localhost:3000/](http://localhost:3000/)
