
import express from "express"
import { ApolloServer } from "@apollo/server"
import  {expressMiddleware} from "@apollo/server/express4"
import {json} from "express"
import cors from "cors"
import axios from "axios"

const Todos = [
    {
        id:1,
        author:"Alex",
        title:"Learning GraphQL",
        completed:false
    },
    {
        id:2,
        author:"Mathew",
        title:"Learning GrapgQL",
        completed:false
    }
]

const typeDefs = `  

    # local array fetching
    type localTodos{
        id:ID!
        author:String
        title:String!
        completed:Boolean!
    }

    #fetching todo list using axios and external testing API.
    type webTodos{
        userId:ID
        id:ID
        title:String
    }

    #using same external API to fetch test Users Info
    type User{
        id:ID
        name:String,
        username:String,
        email:String,
        address:Address
        phone:String,
        website:String,
        company:Company
    }
    type Address{
        street:String,
        suite:String,
        city:String,
        zipcode:String,
        geo:Geo
    }
    type Geo{
        lat:String,
        lng:String
    }
    type Company{
        name:String,
        catchPhrase:String,
        bs:String
    }

    type todo{
        userId:ID!
        id:ID!
        title:String!
        user:User
    }

    # Different Queries that can be possible from above defined schema
    # A client is able to execute these queries. A return-type is also defined on the right side.

    type Query{
        
        getLocalTodos:[localTodos]
        getWebTodos:[webTodos]
        getWebUsers:[User]

        getSingleTodoWithUser:[todo]

        #this is query which is used to fetch a single user by id.
        getSingleUser(id:ID!):User
    } 
`
const resolvers = {
    // resolvers define how to and from where we would fetch the data that syncs with the above defined schema

    todo:{
        // we must define what user 
        user: async (todo)=> (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data
    },
    Query:{
        getLocalTodos: ()=>Todos,
       
        getWebTodos: async()=> (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
        
        getWebUsers: async()=> (await axios.get('https://jsonplaceholder.typicode.com/users')).data,
        
        getSingleUser: async (parent,{id})=> (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,

       
        getSingleTodoWithUser: async ()=> (await axios.get(`https://jsonplaceholder.typicode.com/todos`)).data    
    }

}

async function startServer(){

    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    app.use(express.json())
    app.use(cors())

    await server.start()

    app.use('/graphql',expressMiddleware(server))
    app.listen(8000,()=>{
        console.log('Sever started at PORT 8000')
    })
}

startServer()