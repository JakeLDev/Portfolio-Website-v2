import React from "react";
import { useState } from "react";

const TitleBar = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="justify-center">
                <div id="titlebar" className="fixed w-[40rem] top-0 left-1/2" style={{ transform: 'translateX(-50%) translateY(0px) translateZ(0px)' }}>
                    <ul className="flex flex-row justify-center h-15 rounded-full bg-white bg-opacity-70 m-3 p-1.5">
                        <li className="basis-0 p-2 rounded-full hover:bg-white hover:bg-opacity-80 mx-2">
                            <a className="">test1</a>
                        </li>
                        <li className="basis-0 p-2 rounded-full hover:bg-white hover:bg-opacity-80 mx-2">
                            <a className="">test2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TitleBar;