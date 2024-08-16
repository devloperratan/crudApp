import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import View from './component/View'
import Insert from './component/Insert'
import Update from './component/Update'
import Delete from './component/Delete'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<h1>Welcome TO CrudApp</h1>}></Route>
        <Route path='view' element={<View />}></Route>
        <Route path='insert' element={<Insert />}></Route>
        <Route path="/insert/:id" element={<Insert />} />
        <Route path='update' element={<Update />}></Route>
        <Route path='delete' element={<Delete />}></Route>
      </Routes>
    </>
  )
}

export default App
