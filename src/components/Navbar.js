import { Link } from "react-router-dom";
import { Tabs , Indicator} from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";


function Navbar() {
  const [productTab, setProductTab] = useState(true);
  const navigate = useNavigate();
  const tabValue = useParams();
  const cartProduct = useSelector(state => state.cart)

  return (
    <nav class='bg-[#CED4DA] border-gray-200 fixed w-full z-10'>
      <div class=' pt-2 px-4 flex flex-wrap items-center md:py-4 md:pt-4 md:px-10'>
        <h2 class='flex items-center mt-2 md:mt-0'>
          <span class=' text-2xl font-semibold '>Cart Project</span>
        </h2>

        {/* product Tab */}
        <div className='hidden md:block ml-8  '>
          <p className="text-lg  text-blue-600 hover:text-blue-700 hover:bg-[#c4c4f4] p-2 rounded-lg">
            <Link to='/'>
            product
            </Link>
          </p>
        </div>

        <div class='absolute right-4 top-4'>
        <Indicator color='#8a8686' position="top-start" size={23} label={cartProduct.length}>
            <Link to='Cart'>
              <button
                type='submit'
                onClick={() => setProductTab(false)}
                class='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center md:text-base'
              >
                my Cart
              </button>
            </Link>
        </Indicator>
        </div>

        {/*< mobile view> */}
        <div
          class=' mt-1 items-center justify-between  w-full md:flex md:w-auto md:order-1'
          id='navbar-cta'
        >
          <div className='md:hidden mt-4 ml-10 rounded-t-md bg-[#c0c5d5] w-fit  '>
            <Tabs
              variant='outline'
              value={tabValue}
              onChange={(value) => navigate(`${value}`)}
            >
              <Tabs.List>
                <Tabs.Tab
                  value='/'
                  bg={productTab === true ? "white" : "transparent"}
                  onClick={() => {
                    productTab === false && setProductTab(true);
                  }}
                >
                  Product
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </div>
        </div>
        {/* </mobile view> */}
      </div>
    </nav>
  );
}

export default Navbar;
