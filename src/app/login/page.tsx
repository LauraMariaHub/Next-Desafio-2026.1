import Login from "@/components/login/index";


export default function Page() {
    return(
        <div className="w-full 
        lg:bg-[url('/banner/ocean-background.png')] 
        lg:bg-cover 
        lg:bg-center 
        lg:bg-no-repeat 
        lg:h-screen 
        lg:flex 
        lg:justify-center 
        lg:items-center 
        lg:p-20
        bg-[#ECF3F4]
        bg-none"

        >
            <Login />
        </div>
    )
}