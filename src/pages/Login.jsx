
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// const Login = () => {
//   const { register, errors } = useForm();

//   const onSubmit = (data) => {
//     // Handle login logic here
//     console.log(data);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className="bg-white p-8 rounded shadow-md w-full sm:w-96">
//         <div className="mb-4">
//           <label htmlFor="usernameOrEmail" className="block text-gray-700 text-sm font-bold mb-2">
//             Username or Email
//           </label>
//           <input
//             type="text"
//             id="usernameOrEmail"
//             name="usernameOrEmail"
//             className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"

//           />

//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
//             // ref={register({ required: 'This field is required' })}
//           />
//           {/* {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>} */}
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// {
//   "_id": {
//     "$oid": "658089db65a2bb19294b8eeb"
//   },
//   "name": "John Doe",
//   "username": "john_doe",
//   "password": "YourSecurePassword123",
//   "email": "john.doe@example.com",
//   "gender": "Male",
//   "__v": 0
// }

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    reset();
  };

  return (
    <div className=" bg-cover h-screen bg-center bg-no-repeat "
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
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
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