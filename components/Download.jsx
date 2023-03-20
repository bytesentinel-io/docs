import { ImDownload } from "react-icons/im";

export default function Download({ title, link, text }) {
    return (
        <div className="pt-5">
            <a href={link} className="bg-primary text-white px-4 py-3 rounded-xl">{title}</a>
        </div>
    );
}