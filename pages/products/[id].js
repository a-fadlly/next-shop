import { getProduct, getProducts } from "@/lib/products";
import { ApiError } from "@/lib/api";
import Image from "next/image";
import Page from "@/components/Page";

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    try {
        const product = await getProduct(context.params.id)
        return {
            props: { product },
            revalidate: parseInt(process.env.REVALIDATE_SECONDS),
        }
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true }
        }
        throw err;
    }
}

function ProductPage(props) {
    return (
        <Page title={props.product.title}>
            <div className="flex flex-col lg:flex-row">
                <Image src={props.product.pictureUrl}
                    width={640}
                    height={480}
                    alt="" />
                <div className="flex-1 lg:ml-4">
                    <p className="text-sm"> 
                        {props.product.description}
                    </p>
                    <p className="text-lg font-bold mt-2">
                        {props.product.price}
                    </p>
                </div>
            </div>
        </Page>
    );
}

export default ProductPage;