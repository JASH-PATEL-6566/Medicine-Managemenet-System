import { useRouter } from "next/router";

export const delayRouting = (path) => {
    const router = useRouter();
    setTimeout(() => {
        router.push(path);
    }, 1000);
}