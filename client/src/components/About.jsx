import desk from '../../images/hello.svg';
const About = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col justify-between md:p-20 py-8 px-4 mb-10">
                <div className="flex flex-1 flex-col mf:mr-10">
                    <div className="flex flex-col md:p-12 py-8 px-4">
                        <h3 className="text-black text-3xl font-semibold text-center my-2">
                            How to make a transaction?
                        </h3>
                    </div>
                        <img src={desk} alt='man' className='mt-5 px-2'/>
                </div>
  
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0">
                    <div className="flex justify-between flex-col w-full">
                        <div className='mt-[150px]'>
                            <ul>
                                <li className='flex flex-row justify-start font-medium py-3 px-5'>
                                    1. Connect your account to your MetaMask wallet
                                </li>
                                <li className='flex flex-row justify-start font-medium py-3 px-5'>
                                    2. Find the recipients Blockchain address.
                                </li>
                                <li className='flex flex-row justify-start font-medium py-3 px-5'>
                                    3. Insert the  available information into the box above.
                                </li>
                                <li className='flex flex-row justify-start font-medium py-3 px-5'>
                                    4. Confirm the transaction on MetaMask pop-up.
                                </li>
                                <li className='flex flex-row justify-start font-medium py-3 px-5'>
                                    5. Confirm the transaction spent as gas for your contract as well.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default About;