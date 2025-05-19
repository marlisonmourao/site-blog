type User = {
  id: number
  name: string
  email: string
}

async function fetchUsers(): Promise<User[]> {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
        },
        {
          id: 3,
          name: 'John Smith',
          email: 'john.smith@example.com',
        },
      ])
    }, 2000)
  )
}

async function UserList() {
  const users = await fetchUsers()

  return (
    <div className="mt-20 text-white">
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default function User() {
  return (
    <>
      <UserList />
    </>
  )
}
