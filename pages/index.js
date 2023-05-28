import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Page from "@/components/Page";

export async function getStaticProps() {
    const products = await getProducts();
    return { props: { products }, revalidate: 5 * 60 }
}

export default function Home(props) {
    return (
        <Page title="Indoor Plants">
            <ul className="grid grid-cols-1 lg:grid-cols-3">
                {props.products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </Page>
    )
}
