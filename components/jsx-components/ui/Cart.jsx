import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useState} from 'react'

import PromotionIcon from "../icons/PromotionIcon.jsx";
import DeleteIcon from "../icons/DeleteIcon.jsx";
import CloseIcon from "../icons/CloseIcon.jsx";
import HeartIcon from "../icons/HeartIcon.jsx";
import EditIcon from "../icons/EditIcon.jsx";
import GiftIcon from "../icons/GiftIcon.jsx";
import products from "../../../shop-ns-main/src/data/productData.jsx";

export default function Cart({isCartOpen, setIsCartOpen}) {
    let [isGiftSelected, setIsGiftSelected] = useState(false)

    return (
        <Transition.Root show={isCartOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[1000000]" onClose={setIsCartOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        {/* Cart header */}
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <button
                                                type="button"
                                                className="flex justify-end w-full -m-2 mb-4"
                                                onClick={() => setIsCartOpen(false)}
                                            >
                                                <CloseIcon />
                                            </button>

                                            <div className="flex items-center justify-between pb-4">
                                                <Dialog.Title>
                                                    <span className="text-2xl font-bold">Basket</span>
                                                    <span className="inline-block ml-2 font-semibold">(1)</span>
                                                </Dialog.Title>
                                                <button className="text-xs font-semibold border border-black rounded-full py-1 px-2 flex space-x-2 items-center">
                                                    <HeartIcon />
                                                    <span>Favourites</span>
                                                </button>
                                            </div>

                                            <div className="p-4 border-y border-[#e6e6e6]">
                                                <p className="font-semibold text-green-600">FREE STANDARD SHIPPING!</p>
                                                <p className="text-xs font-medium">You have gotten your free standard home delivery</p>
                                            </div>

                                            {/* Selected products */}
                                            <div className="mt-2 border-b pb-6">
                                                <div className="flow-root">
                                                    <ul>
                                                        {products.map((product) => (
                                                            <li key={product.id} className="flex py-4">
                                                                <div className="h-32 w-28 flex-shrink-0 overflow-hidden border border-[#e6e6e6]">
                                                                    <img
                                                                        src={product.imageSrc}
                                                                        alt={product.imageAlt}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col justify-between">
                                                                    <div>
                                                                        <div className="flex justify-between">
                                                                            <p className="font-semibold">{product.price}</p>
                                                                            <div className="flex items-center">
                                                                                <EditIcon className="cursor-pointer"/>
                                                                                <div className="h-4 w-0.5 bg-[#e6e6e6] mx-2"></div>
                                                                                <DeleteIcon className="cursor-pointer"/>
                                                                            </div>
                                                                        </div>

                                                                        <a className="text-xs font-medium" href={product.href}>{product.name}</a>
                                                                        <p className="text-xs text-[#b6b6b6]">{product.size}</p>
                                                                    </div>
                                                                <button className="text-sm font-bold self-start">Move to favorites</button>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Extra info promotional code, gifts */}
                                            <div className="cursor-pointer flex items-center justify-between text-xs font-bold py-4">
                                                <div className="flex items-center space-x-4">
                                                    <PromotionIcon />
                                                    <p>Promotional code</p>
                                                </div>
                                                <span>Add</span>
                                            </div>
                                            <div className="cursor-pointer flex items-center justify-between text-xs font-bold py-4 border-y" onClick={()=> setIsGiftSelected(!isGiftSelected)}>
                                                <div className="flex items-center space-x-4">
                                                    <GiftIcon />
                                                    <p>Gift ticket</p>
                                                </div>
                                                <input type="checkbox" checked={isGiftSelected} readOnly={true}/>
                                            </div>
                                        </div>

                                        {/* Cart footer */}
                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 space-y-3">
                                            <div className="flex justify-between text-sm font-medium">
                                                <p>Subtotal</p>
                                                <p>$262.00</p>
                                            </div>
                                            <div className="flex justify-between text-sm font-medium">
                                                <p>Shipping costs</p>
                                                <p className="font-medium text-green-500">FREE</p>
                                            </div>
                                            <div className="flex justify-between text-xl font-semibold">
                                                <p>Total</p>
                                                <p>$262.00</p>
                                            </div>
                                            <p className="text-xs text-[#b6b6b6]">(Taxes, if applicable, included)</p>

                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                                                >
                                                    CHECKOUT
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
