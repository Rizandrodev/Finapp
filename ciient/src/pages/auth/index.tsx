import {SignedIn ,SignUpButton,SignedOut, SignInButton,UserButton } from "@clerk/clerk-react";

export function Auth(){
    return(
        <div className="SigIn-conatainer">
            <SignedOut>
                <SignInButton mode="modal"/>
                <SignUpButton mode="modal"/>
            </SignedOut>

            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    )
}