'use client'
import React, { useContext, useEffect , useState} from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from './Cart';
import { usePathname } from 'next/navigation'



const handleSignOut = async () => {
  await signOut();
  router.push('/'); // Redirect to the homepage after signing out
};
function Header() {
  const pathname = usePathname()
  const exactPaths = ["/cart", "/Store","checkout"];
  const showCart = exactPaths.includes(pathname) || pathname.startsWith("/Store/");

  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [openCart, setOpenCart] = useState(false);
  const {cart, setCart} = useContext(CartContext);
  useEffect(()=>{
    setIsLoggedIn(window.location.href.toString().includes('sign-in','sign-up'))
  },[])
  const {user}=useUser();
  useEffect(() => {
		user && getCartItems();
	}, [user])
	const getCartItems = () => {
		CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
			//console.log('response from cart items', res?.data)
			res?.data?.forEach(citem => {
				setCart((oldCart) => [
					...oldCart,
					{
						id: citem.id,
						product: citem.prouducts
            //?.attributes?.products?.data[0]
					}
				])
			})

		})
	}






  return !isLoggedIn && (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-orange-600 to-purple-700 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-white font-bold text-2xl">
          ChVoyage
        </a>

        <nav className="hidden md:flex md:items-center space-x-8">
          <a href="/" className="text-white hover:text-orange-200 transition-colors">
            Home
          </a>
          <a href="/Destinations" className="text-white hover:text-orange-200 transition-colors">
            Destinations
          </a>
          <a href="/Flights" className="text-white hover:text-orange-200 transition-colors">
            Flights
          </a>
          <a href="/Store" className="text-white hover:text-orange-200 transition-colors">
            Store
          </a>
          <a href="/Contact" className="text-white hover:text-orange-200 transition-colors">
            Contact
          </a>
          {!user ?
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-orange-600 px-5  hover:bg-orange-400 py-2.5 text-sm font-medium text-white shadow"
              href="/sign-in"
            >
              Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-white px-5 py-2.5 hover:bg-orange-100 text-sm font-medium text-orange-600"
                href="/sign-up"
              >
                Register
              </a>
            </div>
          </div>
              :
              <div className='flex items-center gap-5'>
                 
                    {showCart && (
                      <h2 className='flex gap-1 cursor-pointer text-white'>
                      <ShoppingCart color='white' onClick={()=>setOpenCart(!openCart)} />({cart?.length })
    
  </h2>
)}



                <UserButton onSignOut={handleSignOut}/>
                {openCart && <Cart/>}
                </div>}
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
          
        
            
        
      </div>
    </header>

  );
}
export default Header
