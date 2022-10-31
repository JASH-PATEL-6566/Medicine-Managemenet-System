import VNavbar from "./VNavbar/VNavbar"

export default function SideLayout(props) {
    return (
        <>
            <VNavbar />
            <main>
                {props.children}
            </main>
        </>
    )
}