import { ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";

export default function IntroComponent(): ReactElement {
    return (
        <>
            <div className="align-middle md:w-[50%] m-auto drop-shadow">
                <TypeAnimation
                    sequence={[
                        'Hello, Srivatsa Here', 2000,
                        'I am a computer science enthusiast and an electronics Hobbyist', 2000,
                        'Nice to meet you!', 2000
                    ]}
                    speed={60}
                    omitDeletionAnimation={true}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
        </>
    )
}