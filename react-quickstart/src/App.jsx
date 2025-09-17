import './App.css'

function AdminPanel() {
  return (
    <h1>Admin Panel</h1>
  )
}

function LoginForm() {
  return (
    <h1>Login Form</h1>
  )
}

function App() {
  let content
  let isLoggedIn = true

  if (isLoggedIn) {
    content = <AdminPanel/>
  } else {
    content = <LoginForm/>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App
