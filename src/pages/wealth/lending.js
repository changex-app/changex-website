import * as React from "react";
import Hero from "../../components/Hero/Hero";
import { Outlet } from 'react-router-dom';
import Layout from "../../components/Layout/Layout";

export default function Lending(){
    return (
        <>
            <Hero title={'Lending'}/>
            <section id="lending"></section>
        </>

    )
}
