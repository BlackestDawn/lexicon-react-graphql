import { GridProps, ItemWithID } from "@/lib/props/grid";
import Link from "next/link";

export default function ItemGrid<T extends ItemWithID>({ items, CardComponent, pathComponent, gridClassName }: GridProps<T> ) {
  return (
    <div className={`grid grid-cols-1 sd:grid-cols-2 md:grid-cols-4 grid-auto-rows-[auto_1fr] gap-4 p-4 ${gridClassName}`}>
      {items.map((item) => (
        <Link key={item.id} href={`/${pathComponent}/${item.id}`} >
          <CardComponent item={item} />
        </Link>
      ))}
    </div>
  );
}
