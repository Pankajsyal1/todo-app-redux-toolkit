import logo from "@/assets/logo.png";

const Logo = ({ width = 130, center = false }) => {
    return (
        <img src={logo} alt="Logo" className={center ? 'mx-auto' : 'mx-0'} width={width} />
    )
}

export default Logo
