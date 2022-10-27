import * as React from "react";
import Hero from "../../components/Hero/Hero";
import { Outlet } from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import Navigation from "../../components/Navbar/Nav";
import MetaDecorator from "../../Utils/MetaDecorator";

export default function Lending(){
    return (
        <>
            <MetaDecorator/>
            <Hero title={'Lending'}/>
            <section id="lending"></section>
        </>

    )
}
