import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center my-6'>
           <h2 className="text-3xl font-bold">Knowledge Cafe</h2> 
           <img src={Profile} alt="" />
        </div>
    );
};

export default Header;