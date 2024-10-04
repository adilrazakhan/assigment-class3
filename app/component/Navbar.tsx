import Link from "next/link";

export default function Page() {
    return (
        <div>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/about">About</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contactus">Contact Us</Link>&nbsp;|&nbsp;&nbsp;
        </div>
    );
}