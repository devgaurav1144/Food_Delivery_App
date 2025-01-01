import Link from 'next/link'

const Header = () => {
    return (

        <>
            <div className="header">
            <a href="#default" className="logo">
                    <img className="headeralogo" src="https://png.pngtree.com/png-vector/20220327/ourlarge/pngtree-motorcycles-cartoon-pizza-and-food-delivery-instant-online-png-image_4517042.png"       
                    />
                </a>
                <div className="header-right">
                   <h2>Online Food Delivery</h2>
                   <Link className="active" href="/">Home</Link>
                    <Link className="linkspace" href="#">Contact</Link>
                    <Link className="linkspace" href="#">About</Link>
                </div>
                
            </div>
        </>
    )
}

export default Header;