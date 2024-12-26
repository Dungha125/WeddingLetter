'use client'
import { useState, useRef } from "react";
import Mainwedding from "@/components/Mainwedding";
import Infor from "@/components/Infor";
import Letter from "@/components/Letter";
import Album from "@/components/Album";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);  // State để lưu trạng thái tắt/mở âm thanh
  const audioRef = useRef<HTMLAudioElement | null>(null);   // Tham chiếu đến phần tử audio

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;  
    }
    setIsMuted(!isMuted);  
  };

  return (
    <div className="w-full h-full">
      <audio
        ref={audioRef}
        src="/audio/music.mp3" 
        autoPlay
        loop
        muted={isMuted} 
      />
      <div className="flex flex-col overflow-hidden">
        <Mainwedding />
        <Infor />
        <Letter />
        <Album />
      </div>

      {/* Nút tắt/mở âm thanh */}
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 p-3 bg-gray-500 text-white rounded-full"
      >
        {isMuted ? "🔇" : "🔊"} {/* Biểu tượng tắt/mở âm thanh */}
      </button>
    </div>
  );
}
