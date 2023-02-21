import Medicine from "../Models/medicine";

export default async function fetchData() {
    const res = await Medicine.find({});
    return res;
}