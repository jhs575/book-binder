import PieChart from "../components/Chart"
export default function Chart() {
    const readList = JSON.parse(localStorage.getItem("readList") ?? "[]")
    return (
        <>

            <section className="container mx-auto p-10 flex justify-center h-[80vh] items-center">

                {readList.length > 0 ? <PieChart /> : <h3 className="font-semibold text-3xl text-center">Read Some Book to See The Chart</h3>}
            </section>
        </>
    )
}