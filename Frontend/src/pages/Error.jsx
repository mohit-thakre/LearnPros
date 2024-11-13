
import logo from "../assets/Logo/404_logo.png"

function Error() {
  return (
    <div className="flex flex-1 justify-center flex-col items-center text-white text-3xl">
      <img className=" w-[400px]" src={logo} alt="error"/>
      <h1 className=" font-extrabold"><span className=" text-pink-600">Oops,</span> looks like the page is lost.</h1>
  <p className=" text-sm py-2">This is not a fault, just an accident that was not intentional.</p>
      

    </div>
  );
}

export default Error;