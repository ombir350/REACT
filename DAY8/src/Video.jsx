import { useRef } from "react";

function Video(){
   
    const videoRef = useRef(null);

    function handleStart(){
        videoRef.current.play();
    }


    function handleStop(){
        videoRef.current.pause();
    }


    function handleRestart(){
        videoRef.current.currentTime = 0;
    }

     // 10 seconds backward
    function handleBackward() {
        videoRef.current.currentTime =
            Math.max(0, videoRef.current.currentTime - 10);
    }

    // 10 seconds forward
    function handleForward() {
        videoRef.current.currentTime =
            Math.min(
                videoRef.current.duration,
                videoRef.current.currentTime + 10
            );
    }

    return(
        <>
        <video ref={videoRef} src="/Chalre_Chalre_Waal.mp4" width="600" height="400"></video>
        <div>
            <button onClick={handleBackward}>⏪ 10 sec</button>
            <button onClick={handleStart}>▶ Start</button>
            <button onClick={handleStop}>⏸ Pause</button>
            <button onClick={handleRestart}>🔄 Restart</button>
            <button onClick={handleForward}>10 sec ⏩</button>
        </div>
        </>
    )
}

export default Video;