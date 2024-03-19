import React, { useState } from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { BiBlanket } from "react-icons/bi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Footer = () => {

    return (
        <footer className="bg-slate-50">
            <div className="mx-auto w-full p-4 py-6 lg:py-8 max-w-7xl sm:px-6 lg:px-8 px-5">
                <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="flex flex-wrap items-center pl-9 gap-y-4 gap-x-14 ml-5">
                            <div>
                                <h2 className="mb-6 text-md font-semibold uppercase">Compromiso</h2>
                                <ul className="">
                                    <li className="mb-2 ">
                                        <a href='' className='flex px-2'>Acerca de <CiCircleInfo className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Clientes <IoPeopleOutline className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Prensa <BiBlanket className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Carreras <IoSchoolOutline className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Privacidad <MdOutlinePrivacyTip className='mt-1 ml-2' /></a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-md font-semibold uppercase">Recursos</h2>
                                <ul className="">
                                    <li className="mb-2 ">
                                        <a href='' className='flex px-2'>Comunidad <CiCircleInfo className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Socios <IoPeopleOutline className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Guia <BiBlanket className='mt-1 ml-2' /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href='' className='flex px-2'>Reuniones <IoSchoolOutline className='mt-1 ml-2' /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  

                    <div className='mb-6 md:mb-0'>
                        <div className="flex flex-wrap items-center gap-y-4 gap-x-8">
                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2 min by
                                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                        night life in Barcelona.
                                    </Typography>
                                </CardBody>
                            </Card>

                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2 min by
                                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                        night life in Barcelona.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between px-16 mt-5">
                    <div className="flex">
                        <a className="group" aria-label="TaxPal on X" href="#">
                            <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright ©{' '}
                        <span className="font-bold">2024</span> All rights reserved.
                    </p>
                </div>
            </div>
        </footer >

    );
};

export default Footer;
