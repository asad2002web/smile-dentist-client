import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const { singIn } = useAuth();

  const onSubmit = (data) => {
    singIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    })
    reset();
  };

  return (
    <div className=" bg-cover py-20 bg-center bg-no-repeat "
      style={{ backgroundImage: 'url("https://i.ibb.co/fFZDkMR/wp9764093.jpg")' }}>
      <div className='pt-20 px-5'>
        <form onSubmit={handleSubmit(onSubmit)}
          className="max-w-md md:w-full mx-auto p-4 border-4 border-gray-300 rounded-lg shadow-lg  bg-blur ">

          <h2 className="text-center text-white text-3xl pt-4 pb-8">Sign in</h2>
          <div className="mb-4">
            <label className="block  font-semibold text-white text-sm md:text-xl" htmlFor="username">
              UserName:
            </label>
            <input
              {...register('userName', { required: 'userName is required' })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-white text-sm md:text-xl" htmlFor="email">
              Email:
            </label>
            <input
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" type='email'
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-white text-sm md:text-xl" htmlFor="password">
              Password:
            </label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="link-hover text-right pb-4 text-white text-sm md:text-xl">
            <Link>Forget Password </Link>
          </div>


          <button type="submit" className="PrimaryButton px-[30px] w-full">Sign in</button>

          <p className="text-center py-5 text-white text-sm md:text-xl">Create New Account! <span className="text-blue-900 link text-sm md:text-xl">
            <Link to="/register">Register Now !</Link>
          </span></p>
        </form>
      </div>
    </div>
  );
};
export default Login;