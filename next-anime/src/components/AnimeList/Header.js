

const Header = ({title}) => {
    return (
        <>
            <div className=" pt-0 px-8 flex justify-start items-center">
                <h1 className="absolute text-xl font-bold bg-red-300 pb-4 pt-2 rounded-xl px-2">{title}</h1>
            </div>
            
        </>
    )
}

export default Header