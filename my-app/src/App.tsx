import { useEffect, useState } from 'react'

type IRemaining = {
    days: Number,
    hours: Number,
    minutes: Number,
    seconds: Number,
}

function App() {

    const [remaingTime, setRemaingTime] = useState<IRemaining>(getTime());

    function getTime() {
        const date = Date.parse('August 9, 2022 08:00:00'.toLocaleString());
        const start = Date.now();
        const remaining = date - start;

        const restday = remaining % (60 * 60 * 24 * 1000)
        const resthour = remaining % (60 * 60 * 1000)
        const restminute = remaining % (60 * 1000)

        return ({
            days: Math.floor(remaining / (60 * 60 * 24 * 1000)),
            hours: (Math.floor(Math.floor(restday / (60 * 60 * 1000)))),
            minutes: (Math.floor(Math.floor(resthour / (60 * 1000)))),
            seconds: Math.floor(Math.floor(restminute / (1000))),
        }

        )
    }
    const gradient = 'text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-700 to-rose-700';

    useEffect(() => {
        setInterval(function () {

            setRemaingTime(getTime())
        }, 1000);
    }, []);
    return (
        <>
            <div className=' animate-fade-in-down overflow-x-clip md:hidden p-4 bg-black max-h-screen h-screen'>
                <div className='text-9xl font-semibold text-right text-white'>
                    <h1 className={gradient}>{remaingTime.days.toString()}</h1>
                    <h3 className='text-base '>Tage</h3>
                    <h1 className={gradient}>{("0" + remaingTime.hours).slice(-2)}</h1>
                    <h3 className='text-base'>Stunden</h3>
                    <h1 className={gradient}>{("0" + remaingTime.minutes).slice(-2)}</h1>
                    <h3 className='text-base'>Minuten</h3>
                    <h1 className={gradient}>{("0" + remaingTime.seconds).slice(-2)}</h1>
                    <h3 className='text-base'>Sekunden</h3>
                </div>

            </div>

            <div className='animate-fade-in-down hidden md:flex justify-center items-center h-screen w-screen bg-black'>
                <div>


                    <div className='p-5 font-sans'>
                        <div className='m-5'>
                            <h1 className={gradient}>Staatsexamen</h1>
                        </div>
                        <div className='flex justify-between text-9xl font-sans tracking-wider font-extrabold text-white '>
                            <div>
                                <h1 className={gradient}>{remaingTime.days.toString()}</h1>
                                <p className='text-right pr-5 tracking-normal text-xl'>Tage</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{remaingTime.hours ? ("0" + remaingTime.hours).slice(-2) : "00"}</h1>
                                <p className='text-right tracking-normal text-xl'>Stunden</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{remaingTime.minutes ? ("0" + remaingTime.minutes).slice(-2) : "00"}</h1>
                                <p className='text-right justify-around tracking-normal text-xl'>Minuten</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{remaingTime.seconds ? ("0" + remaingTime.seconds).slice(-2) : "00"}</h1>
                                <p className='text-right tracking-normal text-xl'>Sekunden</p>
                            </div>

                        </div >
                    </div>
                </div >
            </div>
        </>
    );
}

export default App;
