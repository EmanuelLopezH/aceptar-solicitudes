"use client";
import "./page.css";
import SwitchButton from "@/components/SwitchButton";
import Header from "@/components/Header";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Map></Map>
      <SwitchButton></SwitchButton>
    </div>
  );
}
