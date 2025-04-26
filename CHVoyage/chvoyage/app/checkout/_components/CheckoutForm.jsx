import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import OrderApi from '../../_utils/OrderApis'
import CartApis from '../../_utils/CartApis';

import { Button } from "@/components/ui/button"

const CheckoutForm = ({ amount }) => {
	const { cart, setCart } = useContext(CartContext)
	const { user } = useUser()
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrorMessage] = useState()



	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		const handleError = (error) => {
			setLoading(false)
			setErrorMessage(error.message)
		}
		// Create New Order
		createOrder();
		// Send an Email
		
		const data =[user.primaryEmailAddress.emailAddress, user.fullName,amount];
		console.log(data)
		sendEmail(data);
		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
		const res = await fetch('api/create-intent', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
		const clientSecret = await res.json()

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/payment-confirm",
			},
			
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};
	const createOrder = () => {
		let productIds = [];
		cart.forEach(el => {
			productIds.push(el?.product?.id)
            console.log('product id', el)
		})
		const data = {
			data: {
				email: user.primaryEmailAddress.emailAddress,
				username: user.fullName,
				amount,
				prouducts: productIds
			}
		}
		OrderApi.createOrder(data).then((res) => {
			if (res) {
				cart.forEach(el => {
					CartApis.deleteCartItem(el?.id).then(result => {

					})
				})
			}
		})
	}
	const sendEmail = async (data) => {
		try {
		const res = await fetch('api/send-email', {
			method: 'POST',
			body: JSON.stringify(data)
			
		})
		if (!res.ok) {
			throw new Error('Failed to send email');
		  }
	  
		  const result = await res.json();
		  console.log('Email sent successfully:', result);
		} catch (err) {
		  console.error('Email send failed:', err);
		}

		
	}


  return (
    <section>	

<div className="bg-orange-50 rounded-lg p-4 mt-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">Order Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">{amount},00 DZD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Discounts</span>
                          <span className="font-medium text-green-600">-0,00 DZD</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-orange-800 pt-2 border-t border-orange-200">
                          <span>Total</span>
                          <span>{amount},00 DZD</span>
                        </div>
                      </div>
                    </div>



		<div className='mt-4'>
    <form onSubmit={handleSubmit}>
                <PaymentElement />
				<Button className=" w-full p-2 mt-4 rounded bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
				Submit
                      </Button>

		</form>
		</div>
        </section>
  );
};

export default CheckoutForm;