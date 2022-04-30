import { useEffect, useState } from 'react'

function App() {

    const [days, setdays] = useState<number>(0);
    const [hours, sethours] = useState<number>(0);
    const [minutes, setminutes] = useState<number>(0);
    const [sec, setsec] = useState<number>(0);

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


    useEffect(() => {
        setInterval(function () {

            getTime()
        }, 1000);
    }, []);

    return (
        <div className='flex justify-center items-center h-screen w-screen bg-gray-800'>

            <div className='p-5 '>
                <div className='flex justify-between text-9xl font-sans tracking-wider font-extrabold text-white '>
                    <div>
                        <h1>{days}</h1>
                        <p className='text-right pr-5 tracking-normal text-xl'>Tage</p>
                    </div>
                    <div>:</div>
                    <div>
                        <h1>{("0" + hours).slice(-2)}</h1>
                        <p className='text-right tracking-normal text-xl'>Stunden</p>
                    </div>
                    <div>:</div>
                    <div>
                        <h1>{("0" + minutes).slice(-2)}</h1>
                        <p className='text-right justify-around tracking-normal text-xl'>Minuten</p>
                    </div>
                    <div>:</div>
                    <div>
                        <h1>{("0" + sec).slice(-2)}</h1>
                        <p className='text-right tracking-normal text-xl'>Sekunden</p>
                    </div>
                </div >
            </div>
        </div >
    );
}

export default App;
