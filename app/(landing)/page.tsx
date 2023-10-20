import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
    return (<div>Landing Page (Unprotected)
        <div className="">
            <Link href={"/sign-in"}>
                <Button variant={"default"} size={"lg"}>
                    Login
                </Button>
            </Link>
            <Link href={"/sign-up"}>
                <Button variant={"default"} size={"lg"}>
                    Register
                </Button>
            </Link>
        </div>
    </div> );
}
  
export default LandingPage;