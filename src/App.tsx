import { Routes, Route } from "react-router-dom"
import OtpVerificationForm from "./features/auth/components/OtpVerificationForm/OtpVerificationForm"
import TimeLineForm from "./features/auth/components/TimeLineForm/TimeLineForm"
import ReceivedForm from "./features/auth/components/TimeLineForm/ReceivedForm/ReceivedForm"
import LoginForm from "./features/auth/components/LoginForm/LoginForm"
import RegisterForm from "./features/auth/components/RegisterForm/RegisterForm"

function App() {

  return (
    <Routes>
      <Route path="/otp" element={<OtpVerificationForm/>} />
      <Route path="/status" element={<TimeLineForm />}/>      
      <Route path="/verify" element={<ReceivedForm />}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/registro" element={<RegisterForm/>}/>
    </Routes>
  )
}

export default App
