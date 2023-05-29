import Link from "next/link";
import Image from "next/image";

function ProductCard(props) {
  return (
    <div className="border my-4 w-80 shadow hover:shadow-xl">
      <Link href={`/products/${props.product.id}`}>
        <Image src={props.product.pictureUrl} alt="" width={320} height={240} />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">{props.product.title}</h2>
          <span>{props.product.price}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;