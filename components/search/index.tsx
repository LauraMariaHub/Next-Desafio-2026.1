import Products from "../products";
import SecondarySearch from "./secondary-search";

export default function Search() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">
            <SecondarySearch />
            <Products/>
        </div>
    )
}