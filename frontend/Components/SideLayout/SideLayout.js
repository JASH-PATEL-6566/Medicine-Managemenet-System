import VNavbar from "./VNavbar/VNavbar"

export default function SideLayout(props) {
    return (
        <section>
            <VNavbar />
            <main className="main">
                {props.children}
            </main>
        </section>
    )
}