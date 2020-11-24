import React from 'react'

function App() {
  const [projects, setProjects] = React.useState(null)
  React.useEffect(() => {
    const fetchMsg = async () => {
      const res = await fetch(process.env.REACT_APP_API_URL)
      const projects = await res.json()
      setProjects(projects)
    }
    fetchMsg()
  })
  const ulStyle = {
    listStyle: 'none',
    width: '350px',
    margin: '32px auto',
  }
  const listItemStyle = {
    background: '#FFECFF',
    color: '#002278',
    fontFamily: 'Arial',
    padding: '24px 32px',
    margin: '4px',
    borderRadius: '4px',
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Todos </h2>
      <ul style={ulStyle}>
        {projects?.map((project) => (
          <li style={listItemStyle} key={project.id}>
            <h4>{project.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
