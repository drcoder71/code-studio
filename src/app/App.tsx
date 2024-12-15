import Root from "@/components/root/root"
import { CodeStudioPage, HomePage } from "@/pages"
import { SignInPage, SignUpPage } from "@/pages/auth-pages"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-[100vh]">
      <Root>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="code-studio" element={<CodeStudioPage />} />
          <Route path="auth">
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Root>
    </div>
  )
}

export default App