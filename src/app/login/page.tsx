import Login from "@/components/login/index";


export default function Page() {
    return(
        <div className="w-full bg-[url('/banner/ocean-background.png')] bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center p-20">
            <Login />
        </div>
    )
}