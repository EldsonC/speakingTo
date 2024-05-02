import { MicrophoneIcon } from "./assets/icons/microphone";
import { Speach } from "./styled";
import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState("Said Hello!");
  const message = "To be able to use the voice, allow access to the microphone.";

  const [theme, setTheme] = useState(false);

  const [transcript, setTranscript] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    if (isListening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript;
        result === "dark mode" || result === "light mode" ? null : setTranscript(prevTranscript => prevTranscript + ' ' + result);
        result === "dark mode" ? setTheme(true) : setTheme(false);
        result === "light mode" ? setTheme(false) : setTheme(true);

        setStatus("I'm listening")
        recognition.stop();
        recognition.start(); // Restart recognition to continue listening
      };
      recognition.start();
      setStatus("Said Hello!")
    }


  }, [isListening]);

  const toggleListening = () => {
    setIsListening(prevState => !prevState);
  };

  return (
    <Speach
      $stateTheme={theme}
    >
      <div className={isListening ? "speech_microphone-1 speech-animation" : "speech_microphone-1"}>
        <div className={isListening ? "speech_microphone-2 speech-animation " : "speech_microphone-2"}>
          <div className={isListening ? "speech_microphone-3 speech-animation " : "speech_microphone-3"} onClick={toggleListening}>
            <MicrophoneIcon />
          </div>
        </div>
      </div>

      <div className="speech_information">
        <h4>{status}</h4>
        <p>{transcript ? transcript : message}</p>
      </div>
    </Speach>
  )
}

export default App
