import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <>
      <Layout>
        <div style={{ gridArea: 'main', backgroundColor: 'orange' }}>
          <h1>main</h1>
          <div>sideBar2</div>
        </div>
      </Layout>
    </>
  )
}

export default App
