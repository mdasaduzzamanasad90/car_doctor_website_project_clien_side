
const Cardshoping = ({serviceshoping}) => {
    const {email,image,phone,price,date,servicename} = serviceshoping;
    return (
        <div className="mb-10">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center"><img src={image} alt="" className="w-32 h-32 object-cover rounded-xl" />
                <div><h1>{servicename}</h1><p>{date}</p></div>
                </div>
                <h1>{email}</h1>
                <h1>{phone}</h1>
                <h1>{price}</h1>

            </div>
        </div>
    );
};

export default Cardshoping;