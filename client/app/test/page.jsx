import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";

export default function Projects() {
 return (
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

      <ScrollStackItem itemClassName="bg-purple-500 text-white flex items-center justify-center text-3xl font-bold">
        Card 4
      </ScrollStackItem>
    </ScrollStack>
  );
}
