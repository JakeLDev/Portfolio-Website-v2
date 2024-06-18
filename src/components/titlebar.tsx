import React from "react";
import { useState } from "react";
import { Tabs, Tab } from '@nextui-org/react'

const TitleBar = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex justify-center p-1">
                <Tabs key="md" size="md" radius="full" color="secondary" variant='solid' aria-label="Tabs sizes">
                    <Tab key="photos" title="Photos" href="#test2"/>
                    <Tab key="music" title="Music"/>
                    <Tab key="videos" title="Videos"/>
                </Tabs>
            </div>
        </>
    );
}

export default TitleBar;