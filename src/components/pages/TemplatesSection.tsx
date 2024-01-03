import React from 'react';
import Typography from '../generics/Typography';
import LinkButton from '../generics/Link';

export default function TemplatesSection({ vid }) {
  return (
    <div className="  relative">

      <div className=" lg:w-[90%] py-[60px] mx-auto w-full px-6 space-y-12  ">
        <div className=" space-y-6 relative z-[3] text-center flex flex-col   items-center justify-center">
          {
                    Typography({
                      type: 'Jumbotron',
                      mainHeading: 'Take a Look on our Templates',
                      description: 'A myriad of template design inspirations that we have prepared to speed up your project.',
                    })
                }
          <div className=" text-white ">
            <LinkButton href="/resources/templates" mainInnerText="LOOK ALL OUR TEMPLATES" />
          </div>
        </div>
        {
                vid && (
                <div className=" w-full  ">
                  <video src={vid} autoPlay muted loop className=" w-full m-auto max-h-full object-cover" />
                </div>
                )
            }

      </div>

    </div>
  );
}
