import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

export default function Projects() {
  return (
    <>
      <h1 className="text-center text-[50px] text-white">Projectos</h1>
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem itemClassName="bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
          Card 1
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-red-500 text-white flex items-center justify-center text-3xl font-bold">
          Card 2
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-green-500 text-white flex items-center justify-center text-3xl font-bold">
          Card 3
        </ScrollStackItem>
      </ScrollStack>
    </>
  );
}
