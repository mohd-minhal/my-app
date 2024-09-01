import { View, Text } from "react-native";

let about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Duis aute irure dolor in reprehenderit in voluptate 
 velit esse cillum dolore eu fugiat nulla pariatur.`;

let current = `Excepteur sint occaecat cupidatat non proident, 
 sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function About() {
  return (
    // <div className="flex m-0 py-[9rem] px-[5rem] tracking-tight leading-[1.26] text-[2rem] uppercase">
    //   <p className="font-light max-w-[50%]">{about}</p>
    //   <p className="ml-[2rem] font-thin max-w-[50%]">{current}</p>
    // </div>
    <View>
      <Text>{about}</Text>
      <Text>{current}</Text>
    </View>
  );
}
