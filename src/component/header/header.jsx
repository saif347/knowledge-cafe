import profile_img from '../../assets/images/profile.png'


const Header = () => {
    return (
        <div className='flex justify-between items-center border-b pb-5 '>
            <h3 className='text-5xl font-semibold'>Knowledge Cafe</h3>
            <img src={profile_img} alt="" />
            
        </div>
    );
};

export default Header;