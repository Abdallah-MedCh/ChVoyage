'use server'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ShoppingCart, Search, Filter, Star, Heart } from "lucide-react"
import Link from "next/link"
import React from 'react'
import ProductApis from '../_utils/ProductApis'
import Skeleton from "./_comp/SkeletonPage"
import ProdList from "./_comp/ProdList"




export default async function StorePage() {


  const res = await ProductApis.getLatestProducts(); // This runs on the server
  const productList = res.data.data;

  /*  
  this done so that the data is fetched on the client side this is not the best way to do it but it works it affects the performance of the app
  
  const [productList, setProductList] = useState([]);
  
    useEffect(() => {
      getLatestProducts();
    }, []);
  
    const getLatestProducts = () => {
      ProductApis.getLatestProducts()
        .then(res => {
          setProductList(res.data.data);
         
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    };*/



  return (
    <div>


{productList.length === 0 ? (
        <Skeleton/>
      ) : (
    
    <main className="min-h-screen">
      

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Travel Shop</h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Equip yourself with premium travel gear and accessories for your next adventure. From luggage to tech
              gadgets, we've got everything you need.
            </p>
          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>



      {/* All products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        

            {/* products Grid */}
            <div className="">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 md:mb-0">{productList.length} products</h3>

              </div>
        
              {productList && productList.length > 0 && (
              <ProdList productList={productList} />
                )}
                  
                

              
            </div>
          </div>
        
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Stay Updated</h2>
            <p className="text-orange-700 mb-8">
              Subscribe to our newsletter for exclusive deals, new product announcements, and travel tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email address" className="bg-white border-orange-200" />
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </main>
    )}</div>
    
  )
}
