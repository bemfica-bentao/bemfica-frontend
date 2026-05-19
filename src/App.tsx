import { Routes, Route } from "react-router-dom"
import OtpVerificationForm from "./features/auth/components/OtpVerificationForm/OtpVerificationForm"
import TimeLineForm from "./features/auth/components/TimeLineForm/TimeLineForm"
import ReceivedForm from "./features/auth/components/TimeLineForm/ReceivedForm/ReceivedForm"

function App() {

  return (
    <Routes>
      <Route path="/otp" element={<OtpVerificationForm/>} />
      <Route path="/status" element={<TimeLineForm />}/>      
      <Route path="/verify" element={<ReceivedForm />}/>
    </Routes>
  )
}

export default App
