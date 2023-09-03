# GraphQL-Simple-Testing-And-Setup-With-React


At first, we work on the server side where we define our GraphQL schema, call an API or our database to fetch the data. We can define in our schema different properties specifically that we want to fetch. Here, I am using an Apollo Server which provides a easy GUI interface to interact us with the external API or database and overview the datafetching process. After completing the server part. 

For the testing purpose,here I have used a API which provides us with some random data.I have used an axios to access these data. One of the most powerful and amazing aspect of GraphQL is that we can just fetch what we want in both server or in the client side. Also, in the single request we can make different API calls and interact with two or more than two different endpoints which provides information that maybe linked with each other which is really useful when we have different collections of data and are interlinked. For example, there is a collection that consists of user personal information and another collection of user order history. Now if we want to have all the orders that have been done by a user in a single request and we only want name of an user and orderslist then we can really achieve this using graphQL.

For the client side, we have apollo client which do the heavy lifting for us by providing an instance of a client through which we can make our own API call.
Also we have the privilege to define the query in the client side too, which filters data to be fetched from the server and ultimately increases the performance by solving the problem of overfetching.
