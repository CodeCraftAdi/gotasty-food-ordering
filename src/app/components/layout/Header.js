'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./AppContext";
import ShoppingCart from "./icons/Cart";
import Bars2 from "./icons/Bars2";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'}
          className="whitespace-nowrap text-gray-700 hover:scale-110 transition-all duration-105">
          Hey, Mr.{userName}
        </Link>
        <button 
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-3 py-1 hover:scale-110 transition-all duration-105">
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link className="hover:underline hover:scale-110 transition-all duration-100" href={'/login'}>Login</Link>
        <Link
          href={'/register'}
          className="bg-primary rounded-full text-white px-4 py-2 hover:scale-110 transition-all duration-100 text-sm"
        >
          Register
        </Link>
      
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header >
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-primary font-cursive text-5xl" href={'/'}>
          <div className="flex flex-col justify-center items-center text-3xl italic">
            <span>GoTasty</span>
            <span>𓊤◯ 𓇋</span>
            <span>kitchen</span>
          </div>
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center ">
          <Link className=" hover:underline" href={'/'}>Home</Link>
          <Link className=" hover:underline" href={'/menu'}>Menu</Link>
          <Link className=" hover:underline" href={'/#about'}>About</Link>
          <Link className=" hover:underline" href={'/#contact'}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}

      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-16 text-gray-500 font-semibold">
          <div className="mr-10">
            <Link className="text-primary font-cursive text-5xl" href={'/'} >
              <div className="flex flex-col justify-center items-center text-3xl italic hover:scale-110 transition-all duration-100">
                <span>GoTasty</span>
                <span>𓊤◯ 𓇋</span>
                <span>kitchen</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-8 ml-10 mr-24">
            <Link className="hover:scale-110 transition-all duration-100 hover:underline" href={'/'}>Home</Link>
            <Link className="hover:scale-110 transition-all duration-100 hover:underline" href={'/menu'}>Menu</Link>
            <Link className="hover:scale-110 transition-all duration-100 hover:underline" href={'/#about'}>About</Link>
            <Link className="hover:scale-110 transition-all duration-100 hover:underline" href={'/#contact'}>Contact</Link>
          </div>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500       font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3 hover:scale-150 transition-all duration-100">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}