import { useEffect, useState } from 'react'

function App() {

    const date = Date.parse('August 9, 2022 08:00:00'.toLocaleString());
    const start = Date.now();
    const remaining = date - start;

    const d = Math.floor(remaining / (60 * 60 * 24 * 1000))
    const restday = remaining % (60 * 60 * 24 * 1000)
    const h = (Math.floor(Math.floor(restday / (60 * 60 * 1000))));
    const resthour = remaining % (60 * 60 * 1000)
    const m = (Math.floor(Math.floor(resthour / (60 * 1000))));
    const restminute = remaining % (60 * 1000)
    const s = Math.floor(Math.floor(restminute / (1000)));

    const [days, setdays] = useState<number | undefined>(d);
    const [hours, sethours] = useState<number | undefined>(h);
    const [minutes, setminutes] = useState<number | undefined>(m);
    const [sec, setsec] = useState<number | undefined>(s);

    function getTime() {
        const date = Date.parse('August 9, 2022 08:00:00'.toLocaleString());
        const start = Date.now();
        const remaining = date - start;

        setdays(Math.floor(remaining / (60 * 60 * 24 * 1000)))
        const restday = remaining % (60 * 60 * 24 * 1000)
        sethours(Math.floor(Math.floor(restday / (60 * 60 * 1000))));
        const resthour = remaining % (60 * 60 * 1000)
        setminutes(Math.floor(Math.floor(resthour / (60 * 1000))));
        const restminute = remaining % (60 * 1000)
        setsec(Math.floor(Math.floor(restminute / (1000))));
    }
    const gradient = 'text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-700 to-rose-700';

    useEffect(() => {
        setInterval(function () {

            getTime()
        }, 1000);
    }, []);

    return (
        <>
            <div className='overflow-x-clip md:hidden p-4 bg-black max-h-screen h-screen'>
                <div className='text-9xl font-semibold text-right text-white'>

                    <h1 className={gradient}>{days}</h1>
                    <h3 className='text-base '>Tage</h3>
                    <h1 className={gradient}>{("0" + hours).slice(-2)}</h1>
                    <h3 className='text-base'>Stunden</h3>
                    <h1 className={gradient}>{("0" + minutes).slice(-2)}</h1>
                    <h3 className='text-base'>Minuten</h3>
                    <h1 className={gradient}>{("0" + sec).slice(-2)}</h1>
                    <h3 className='text-base'>Sekunden</h3>
                </div>

            </div>

            <div className='hidden md:flex justify-center items-center h-screen w-screen bg-black'>
                <div>


                    <div className='p-5 font-sans'>
                        <div className='m-5'>
                            <h1 className={gradient}>Staatsexamen</h1>
                        </div>
                        <div className='flex justify-between text-9xl font-sans tracking-wider font-extrabold text-white '>
                            <div>
                                <h1 className={gradient}>{days}</h1>
                                <p className='text-right pr-5 tracking-normal text-xl'>Tage</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{hours ? ("0" + hours).slice(-2) : "00"}</h1>
                                <p className='text-right tracking-normal text-xl'>Stunden</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{minutes ? ("0" + minutes).slice(-2) : "00"}</h1>
                                <p className='text-right justify-around tracking-normal text-xl'>Minuten</p>
                            </div>
                            <div className={gradient}>{" : "}</div>
                            <div>
                                <h1 className={gradient}>{sec ? ("0" + sec).slice(-2) : "00"}</h1>
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
