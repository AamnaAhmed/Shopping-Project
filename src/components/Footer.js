import { BorderAll } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from "../Images/logo.png"
import { ReactComponent as Facebook } from "../Icons/facebook-f.svg"
import { ReactComponent as Twitter } from "../Icons/twitter.svg"
import { ReactComponent as Instagram } from "../Icons/instagram.svg"
import { ReactComponent as Pinterest } from "../Icons/pinterest-p.svg"
import { ReactComponent as Youtube } from "../Icons/youtube.svg"
import appImg from "../Images/pay/app.jpg"
import playImg from "../Images/pay/play.jpg"
import pay from "../Images/pay/pay.png"

export default function Footer() {
    return (
        <div className="pt-20">
            <div className="bg-cyan-900 min-h-fit w-full py-6">
                <div className="container flex justify-between w-full h-full flex-col md:flex-row">
                    <div className="max-w-lg">
                        <h3 className="text-2xl text-white mb-2">Sign Up For Newsletters</h3>
                        <p className="text-slate-500 text-2xl sm:text-lg">Get E-mail updates about our latest shop and  <spna className="text-amber-500">special offers</spna></p>
                    </div>
                    <div className="flex justify-center items-center mt-4 md:mt-0 w-full md:w-fit">
                       <from className="">
                       <TextField id="filled-basic" label="Filled" variant="filled" sx={{backgroundColor:'white', color:'#14b8a6',width:'134px'}}/>
                        <Button variant="contained" size="small" sx={{backgroundColor:'#14b8a6', height:'56px',borderRadius:'0'}}>
                        Sign Up
                        </Button>
                       </from>
                    </div>
                </div>
            </div>
            <div className="py-16">
               <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                         <div>
                            <div className="w-28 mb-4">
                                    <img src={logo} />
                                </div>
                            <p className="text-xl mb-4 font-bold ">Contact</p>
                            <div>
                                <p className="text-md"> <span className="font-bold text-lg">Address:</span> 562 Wellington Rood. Street 32. San Francisco</p>    
                                <p className="text-md"> <span className="font-bold text-lg">Phone:</span> +012222365</p>    
                                <p className="text-md"> <span className="font-bold text-lg">Hours:</span> 10:00 . 18:00 Mon - Sat</p>    
                            </div> 
                            <p class="text-xl my-4 font-bold ">Follow Us</p> 
                            <div className="flex">   
                                <Facebook className="w-4 h-4 mr-2"/>
                                <Twitter className="w-4 h-4 mr-2"/>
                                <Instagram className="w-4 h-4 mr-2"/>
                                <Pinterest className="w-4 h-4 mr-2"/>
                                <Youtube className="w-4 h-4 mr-2"/>
                            </div> 
                         </div>
                           <div>
                                <p class="text-xl mb-4 font-bold ">About</p>
                                <div>
                                    <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">About Us</p>    
                                    <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Delively Information</p>    
                                    <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Privacy Policy</p>    
                                    <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Terms & Conditions</p>    
                                    <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Contact Us</p>    
                                </div> 
                           </div>
                          <div>
                            <p class="text-xl mb-4 font-bold ">My Account</p>
                            <div>
                                <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Sign In</p>    
                                <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">View Cart</p>    
                                <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">My Wishlist</p>    
                                <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Track My Order</p>    
                                <p className="text-md mb-2 hover:text-teal-500 hover:pl-3 duration-200 cursor-pointer">Help</p>    
                            </div> 
                          </div>
                         <div>
                            <p class="text-md font-bold ">Install App</p>
                            <p className="my-4">From App Store or Google Play</p>
                            <div className="flex">
                                <div className="border border-teal-500 rounded-sm mr-2 cursor-pointer">
                                    <img src={appImg}/>
                                </div>
                                <div className="border border-teal-500 rounded-sm cursor-pointer">
                                <img src={playImg}/>
                                </div>
                            </div>
                            <p className="my-4">Secured Payment Gateways</p>
                            <img className=" cursor-pointer" src={pay}/>
                         </div>
               </div>
            </div>
        </div>
    )
}