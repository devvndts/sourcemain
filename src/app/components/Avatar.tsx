import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"
interface AvatarProps {
    src?: string | null | undefined
}
const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    if (src) {
        return (
            <Image src={src} alt="Avatar" width={25} height={25} className="rounded-full" />
        )
    }
    return (
        <FaUserCircle size={25} />
    )

}

export default Avatar;