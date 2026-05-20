import OtpVerificationForm from "./features/auth/components/OtpVerificationForm/OtpVerificationForm"
import { Routes, Route } from "react-router-dom"
import TimeLineForm from "./features/auth/components/TimeLineForm/TimeLineForm"
import LoginForm from "./features/auth/components/LoginForm/LoginForm"

function App() {

  return (
    <Routes>
      <Route path="/otp" element={<OtpVerificationForm/>}/>
      <Route path="/status" element={<TimeLineForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  )
}

export default App
