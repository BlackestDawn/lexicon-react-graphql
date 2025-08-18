import { CharacterCardProps } from "@/lib/props/grid";
import Image from "next/image";

export default function CharacterCard({ item }: CharacterCardProps) {
  return (
    <div className="grid grid-rows-subgrid row-span-2 gap-4 rounded-lg p-1">
      <h4>{item.name}</h4>
      {item.image ?
        <Image
          src={item.image}
          alt={item.name}
          className="order-first"
          width= {300}
          height={300}
        />
        : <span>No image supplied</span>
      }
    </div>
  )
}
