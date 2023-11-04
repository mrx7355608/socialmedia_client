import Input from "../../components/form/Input";

export default function Loginpage() {
  return (
    <div className="w-screen h-screen">
      <h2 className="text-center text-3xl font-bold mt-10">Login to your account</h2>
      <div className="mx-auto w-full max-w-lg p-3 mt-12">
        <form className="w-full">
          <Input 
            name="email" 
            labelName="Email address" 
            type="email"
            error={null}
          />
          <Input 
            name="password" 
            labelName="Password" 
            type="password"
            error={null}
          />
          <p className="mt-3 text-right text-teal-600 text-sm font-medium">Forgot Password?</p>
          <button className="btn btn-success w-full mt-8 rounded-full">Login</button>
        </form>
      </div>
    </div>
  )
}
