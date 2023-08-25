
import { gql, useQuery } from "@apollo/client"
const query = gql`
    query webTodo{
      getWebUsers{
        id
        name
        username
        email
    }
  }
`
function App() {

  const { data, loading } = useQuery(query)
  if (loading) return <h1>Loading....</h1>
  return (
    <div className="App">
    {(JSON.stringify(data.getWebUsers.map((user)=>{
      return {
        name:user.name,
        email:user.email
       }
    })))}
    </div>
  );
}

export default App;
