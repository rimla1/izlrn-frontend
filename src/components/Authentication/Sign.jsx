import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Sign = () => {
    const [signOption, setSignOption] = useState("login")

    return (
        <div className="bg-colorS4 min-h-screen flex justify-center items-center">
          <div className="bg-colorS3 shadow-md rounded-lg p-6 w-full max-w-md">
            {signOption === 'login' ? (
              <Login setSignOption={setSignOption} />
            ) : (
              <Register setSignOption={setSignOption} />
            )}
          </div>
        </div>
      );
}


export default Sign