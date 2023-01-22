import Image from "next/image";

function Logo(props: any){
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image className="rounded-full object-cover"
            height={50}
            width={50}
            src="https://letraslibres.com/wp-content/uploads/2022/06/dosier-achim-1900-1160x774.jpeg"
            alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
}

export default Logo;