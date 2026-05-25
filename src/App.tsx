import { Routes, Route } from "react-router-dom"
import OtpVerificationForm from "./features/auth/components/OtpVerificationForm/OtpVerificationForm"
import TimeLineForm from "./features/auth/components/TimeLineForm/TimeLineForm"
import ReceivedForm from "./features/auth/components/TimeLineForm/ReceivedForm/ReceivedForm"
import LoginForm from "./features/auth/components/LoginForm/LoginForm"
import NutricionistForm from "./features/auth/components/TimeLineForm/NutricionistForm/NutricionistForm"

function App() {

  return (
    <Routes>
      <Route path="/otp" element={<OtpVerificationForm/>} />
      <Route path="/verify" element={<TimeLineForm />}/>      
      <Route path="/verify/1" element={<ReceivedForm />}/>
      <Route path="/verify/2" element={<NutricionistForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  )
}

export default App
