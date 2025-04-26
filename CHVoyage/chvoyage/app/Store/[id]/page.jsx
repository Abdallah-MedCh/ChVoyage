"use client"

import React, { useEffect, useState, useContext } from 'react'
import Image from "next/image"
import Link from "next/link"
import SkeletonPage from "../_comp/SkeletonPage"
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import ProductApis from '../../_utils/ProductApis'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ShoppingCart, Heart, Star, ChevronRight, Truck, RotateCcw, Shield, Check, ArrowLeft,AlertOctagon, BadgeCheck } from "lucide-react"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '../../_utils/CartApis';
import { CartContext } from '../../_context/CartContext';

// This would typically come from a database or API


export default function prodDetailPage({ params }) {
    const {user}= useUser();
    const router =useRouter();
    const {cart, setCart} = useContext(CartContext);
    const handleAddToCart = ()=>{
        if(!user){
              router.push('/sign-in') // Redirect to sign-in if the user is not logged in
        }else{
          const data={
            data:{
              userName: user.fullName,
              userMail: user.primaryEmailAddress.emailAddress,
              prouducts:[product], // The product being added to the cart
              
            }
          }
          
          CartApis.addToCart(data).then(res=>{
            console.log('cart created successfully')
            //setCart(res.data.cart); // Update the cart state with the new cart data
            setCart(
              oldCart=>[...oldCart,
                {
                  id: res?.data?.data?.id,
                  product
                }]
                //product?.[0]]
  
            )
            console.log(product)
          }).catch(error=>{
            console.log('error while adding to cart',error)
            console.log(user.primaryEmailAddress.emailAddress)
          })
        }
        //window.location.reload(); // I dont know what happend but the cart will only render correctly after refreshing thats why its here
    }







//this is meant to be used if category existed (changes must be made) 
const [productList, setProductList] = useState([]);


const getLatestProducts = () => {
  ProductApis.getLatestProducts()
    .then(res => {
      setProductList(res.data.data);
     
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
};

//---------------------------------------

const path=usePathname();

const [productDetails,setProductDetails]=useState({})


useEffect(()=>{
getProductByID_();
},[params?.id])

const getProductByID_ =()=>{
  ProductApis.getProductByID(params?.id).then(res=>{
    setProductDetails(res.data.data) //i could replace it with this res.data.data[0] but i need to re touch the banner and info
    //const test = res.data.data[0] 
    //console.log(test.Title) => this works  <BreadCrumb path={path}/>
    getLatestProducts(); 

  })
}

var product 
if (typeof productDetails === 'object' && productDetails !== null) {
    product = Object.values(productDetails); // Convert to array if needed
  }

  
  

  //const { id } = params
  //const prod = prodsV0.find((p) => p.id === id) || prodsV0[0]
  //const [selectedColor, setSelectedColor] = useState(prod.colors?.[0] || "")
  //const [quantity, setQuantity] = useState(1)

  //const relatedprodsV0 = prod.relatedprodsV0?.map((id) => prodsV0.find((p) => p.id === id)).filter(Boolean) || []

  return (
    <div>
    {product.length === 0 ? (
        <SkeletonPage/>
      ) : (product.map((item, index) => (
    <main key={index} className="min-h-screen">
            {console.log(item.Image[0].url)}
      {/* Breadcrumb */}
      <section className="pt-24 bg-orange-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/Store" className="hover:text-orange-600">
              Store
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-orange-600 font-medium">{item.Title}</span>
          </div>
        </div>
      </section>
      

      
      {/* prod Detail */}
      <section className="py-8 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* prod Images */}
              <div>
                <div className="relative h-[400px] bg-gray-100 rounded-lg mb-4">
                  <Image
                    src={item.Image[0].url || "/placeholder.svg"}
                    alt={item.Title}
                    fill
                    className="object-contain p-4"
                  />
                  
                </div>

                
              </div>

              {/* prod Info */}
              <div>
                <div className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{item.Title}</h1>
                  <div className="flex items-center mb-2">
                    
                  </div>
                  <p className="text-gray-600 mb-4">{item.Description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-orange-600 mr-2">{item.Price},00 DZD</span>
                    
                    
                  </div>
                  
                </div>

                

                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button  onClick={()=>handleAddToCart()} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 flex-1">
                    <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                  </Button>
                 
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-orange-500 mr-2" />
                    <span>Paiment a la livraison  </span>
                  {item?.pafterd ? <BadgeCheck className='text-orange-500 h-5 w-5 ml-3'/>:<AlertOctagon className='h-5 w-5 ml-3'/> }
                
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Related prodsV0 */}
      {productList.length > 0 && (
        <section className="py-12 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-orange-800 mb-8">You May Also Like</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productList.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <Link href={`/Store/${prod.id}`}>
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={prod.Image[0].url || "/placeholder.svg"}
                        alt={prod.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    
                  </Link>

                  <div className="p-5">
                    <Link href={`/Store/${prod.id}`}>
                      <h3 className="text-lg font-bold text-gray-800 mb-1 hover:text-orange-600">{prod.Title}</h3>
                    </Link>
                    

                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-orange-600">{prod.Price},00 DZD</span>
                      <Link href={`/Store/${prod?.id}`}    
                                size="sm"
                className=" flex gap-2 p-3 text-white rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                  >
                    <ShoppingCart />
                    Buy
                  </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/store">
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Store
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
  
    </main>
    )))}  </div>
  )
}
