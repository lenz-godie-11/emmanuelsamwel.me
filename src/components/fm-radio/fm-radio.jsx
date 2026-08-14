import { useState, useRef, useEffect } from 'react';
import profilePic from '../../assets/try.jpg';

function FmRadio() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voice, setVoice] = useState(null);

    const script = `
    Welcome to my page! I'm really glad you stopped by.
    Let me tell you a quick story while you look around —
    the tale of the Hare and the Tortoise.
    Once upon a time, a hare mocked a slow-moving tortoise.
    Annoyed, the tortoise challenged the hare to a race.
    The hare, confident he would win easily, took a nap halfway through.
    Meanwhile, the tortoise kept moving steadily, step by step, without stopping.
    By the time the hare woke up, the tortoise had already crossed the finish line.
    The moral of the story is simple: slow and steady wins the race.
    Thanks for listening, and enjoy exploring my page!
  `;

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // try to find a male-labeled voice; falls back to first available
            const maleVoice = voices.find(v =>
                /male/i.test(v.name) && !/female/i.test(v.name)
            ) || voices.find(v => /david|daniel|alex|fred|google uk english male/i.test(v.name))
                || voices[0];
            setVoice(maleVoice);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    const handleSpeak = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(script);
        utterance.rate = 1;
        utterance.pitch = 0.9;
        if (voice) utterance.voice = voice;
        utterance.onend = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };


    return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-8">
        <div className="relative max-w-2xl w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${profilePic})` }}
            />
            <div className="absolute inset-0 bg-black/30" />

            <button
                onClick={handleSpeak}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                 rounded-full bg-white/80 hover:bg-white
                 flex items-center justify-center shadow-lg
                 transition-transform hover:scale-110 z-10"
                aria-label="Play welcome message"
            >
                {isSpeaking ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="5" width="4" height="14" />
                        <rect x="14" y="5" width="4" height="14" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="6,4 20,12 6,20" />
                    </svg>
                )}
            </button>
        </div>
    </div>
);
}

export default FmRadio;