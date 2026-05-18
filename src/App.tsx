import OtpVerificationForm from "./features/auth/components/OtpVerificationForm/OtpVerificationForm"
import { Routes, Route } from "react-router-dom"
import TimeLineForm from "./features/auth/components/TimeLineForm/TimeLineForm"

function App() {

  return (
    <Routes>
      <Route path="/otp" element={<OtpVerificationForm/>} />
      <Route path="/status" element={<TimeLineForm />}/>      
    </Routes>
  )
}

export default App
