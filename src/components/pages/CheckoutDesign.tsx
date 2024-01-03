import React from 'react';
import Typography from '../generics/Typography';

export default function CheckoutDesign({ mainHeading }) {
  const paymentGateways = [
    '/ecommerce/apple-pay.png', '/ecommerce/google-pay.png', '/ecommerce/paypal.png', '/ecommerce/paytm.png', '/ecommerce/stripe.png',
  ];

  return (
    <div className="  relative bg-[#8294C4]">
      <div
        className=" lg:w-[90%] py-[60px] text-white mx-auto space-y-8  w-full px-6
      "
      >
        <div className="w-full flex items-center flex-col text-center space-y-6  ">
          <Typography type="Jumbotron" mainHeading={mainHeading} />
        </div>
        <div className=" w-full h-full grid lg:grid-cols-2 gap-5">
          <div className=" col-span-1 rounded-3xl space-y-4 ] md:p-20 px-6 py-12">
            <div className=" relative rounded-xl overflow-hidden">
              <img src="/ecommerce/ck-1.png" alt="" className=" max-w-full max-h-full object-cover" />
              <div className=" absolute bottom-[5%] right-[5%] p-4 bg-white rounded-xl">
                <img src="/ecommerce/commission.png" alt="" className=" w-[30px] h-[30px]" />
              </div>
            </div>
            <div className=" space-y-2 text-center">
              <h6 className=" uppercase font-bold text-sm text-white">KEEP YOUR MONEY</h6>
              <h1 className="  font-medium text-2xl">No Commissions</h1>
              <p className=" ">Agnicart doesn't charge any commissions or listing fees on any orders. Just pick from Agnicart’s all-inclusive, affordable subscription plans that fit your needs and pay a fixed monthly/annual fee.</p>

            </div>
          </div>
          <div className="col-span-1 rounded-3xl space-y-4  md:p-20 px-6 py-12">
            <div className=" relative rounded-xl overflow-hidden ">
              <img src="/ecommerce/ck-2.png" alt="" className=" max-w-full max-h-full object-cover" />
            </div>
            <div className=" space-y-2 text-center">
              <h6 className=" uppercase font-bold text-sm text-white">GET PAID DIRECTLY</h6>
              <h1 className="  font-medium text-2xl">Collect payments in your account</h1>
              <p className=" ">Connect your Paypal or Stripe account to take payments directly to your account. Or accept offline payments. Get paid directly every time an order comes in.</p>

            </div>
          </div>

        </div>

      </div>
      <div className=" w-full grid grid-cols-5 gap-5 p-12 bg-white">
        {
                paymentGateways.map((gateway,index) => (
                  <div key={index} className=" col-span-1 w-full flex items-center justify-center">
                    <img src={gateway} alt="" className=" max-w-full max-h-full object-cover" />
                  </div>
                ))
            }
      </div>
    </div>
  );
}
