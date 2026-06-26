import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">Welcome to Veylorae Shop</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App