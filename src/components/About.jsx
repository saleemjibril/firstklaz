export default function About() {
  // Songs data from Music.jsx
  const songs = [
    {
      id: 1,
      name: "Lili",
      link: "https://open.spotify.com/track/6EPx2QMxeczaLRcCT5X2N7?si=18dfbce5384346b4"
    },
    {
      id: 2,
      name: "Maria",
      link: "https://open.spotify.com/track/1tGjxyOhEVdHp9TecN9eNs?si=48b52e329dfe43df"
    },
    {
      id: 3,
      name: "Soyaiya",
      link: "https://open.spotify.com/track/0bUIHpzmoZ4rbyGSkZaKxM?si=8255ed6e8e6845e8"
    },
    {
      id: 4,
      name: "Aure",
      link: "https://open.spotify.com/track/1scrp4arfiqjuW8qtp6DEz?si=5b836d7e9c994538"
    },
    {
      id: 5,
      name: "Umi",
      link: "https://open.spotify.com/track/2cw1w0O1K75vT4034UprlD?si=ff7c58b5b7d7453d"
    },
    {
      id: 6,
      name: "Gen-Z AreWazobia",
      link: "https://open.spotify.com/track/7DmIZw74TbpnuTSmi7i7Jd?si=abd4b152ca1f4a60"
    },
    {
      id: 7,
      name: "Alhaji",
      link: "https://open.spotify.com/track/1zA5rG1hcPSLmfZhU4XJ0e?si=30dbf03b50474657"
    },
    {
      id: 8,
      name: "BamBam",
      link: "https://open.spotify.com/album/0cMy1oQXPtmqHb3OiwshNF?si=rgCCxIihTlSkHdZAJgY_-A"
    },
    {
      id: 9,
      name: "Gen-Z Arewa",
      link: "https://open.spotify.com/track/1IWBeLzkyQ8ijoAD8BjIiU?si=44dba142aa004fe7"
    },
    {
      id: 10,
      name: "Gen-Z Faaji",
      link: "https://open.spotify.com/track/6ML4o3KWB24d8R7RU6fVkl?si=cfd04121cc7148da"
    },
    {
      id: 11,
      name: "Gen-Z Fuji II",
      link: "https://open.spotify.com/track/3V7p0TjIBNai9YpG6wN7VF?si=1af0b73794ef4ffc"
    },
    {
      id: 12,
      name: "Gen-Z Fuji",
      link: "https://open.spotify.com/track/513bT5hsTWaLwIiwktuAPG?si=03a67a1cd79a4f52"
    },
    {
      id: 13,
      name: "Dejavu",
      link: "https://open.spotify.com/album/0uHZlGCfAvwrbiuTWE5JHG?si=nV5LjhblQ3OvowOlun2FBQ"
    }
  ];

  // Helper function to find song link by name
  const getSongLink = (songName) => {
    const song = songs.find(s => s.name === songName);
    return song ? song.link : "#";
  };

  const handlePdfDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch("/firstklaz-epk.pdf");
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "firstklaz-epk.pdf";

      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the blob URL to free up memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="hero">
      <div className="bio">

      FirstKlaz is a rising Afrobeats and Afro-fusion artist from Abuja, Nigeria, celebrated for his genre-blending sound, cultural depth, and honest storytelling. From singing in his church choir as a young boy to exploring the legacies of Bob Marley and Fela Kuti, he has shaped a sound that weaves Afrobeats, Fuji, R&B, hip-hop, and Northern rhythms into something uniquely his.

He is known for reviving the ancient Kalangu sound, a traditional Hausa rhythm and giving it modern life so that it resonates with today’s youth while honoring heritage. Through his work, FirstKlaz positions Northern musical identity not as a niche, but as a central thread in Nigeria’s evolving musical tapestry.

He first broke through with his Gen-Z series <span className="bio_link"><a href={getSongLink("Gen-Z Fuji")} target="_blank">Gen-Z Fuji</a></span>, <span className="bio_link"><a href={getSongLink("Gen-Z Fuji II")} target="_blank">Gen-Z Fuji II</a></span>, <span className="bio_link"><a href={getSongLink("Gen-Z Arewa")} target="_blank">Gen-Z Arewa</a></span>, <span className="bio_link"><a href={getSongLink("Gen-Z Fuji")} target="_blank">Gen-Z Fuji</a></span>, <span className="bio_link"><a href={getSongLink("Gen-Z Faaji")} target="_blank">Gen-Z Faaji</a></span> (featuring Joeboy) before delivering <span className="bio_link"><a href={getSongLink("Gen-Z AreWazobia")} target="_blank">Gen-Z Arewazobia</a></span> (featuring Zlatan & Jeriq), a powerful anthem that unites the three major Nigerian tribes in musical harmony. In 2024, he released <span className="bio_link"><a href={getSongLink("Alhaji")} target="_blank">Alhaji</a></span>, a street-anthem that showcased his creative range and deepened his connection with the streets

Firstklaz has been featured in top
        publications such as 
        <span className="bio_link">
                      {" "}
                      <a
                        href="https://thenativemag.com/tag/firstklaz/"
                        target="blank"
                      >
        TheNativeMag
        </a>
        </span>
         ,  
         <span className="bio_link">
                      {" "}
                      <a
                        href="https://grungecake.com/tag/firstklaz#google_vignette"
                        target="blank"
                      >
         GrungeCake
         </a>
         , 
         <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.wordplaymagazine.com/blog-1/2023/6/21/firstklaz-x-hitsound-i-like-girls-single"
                        target="blank"
                      >
                        WordPlay
                      </a>
                    </span>, 
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://imullar.com/2023/06/19/on-rotation-songs-you-need-in-your-life-this-week-89/"
                        target="blank"
                      >
                        IMullar
                      </a>
                    </span> and <span className="bio_link">
                      {" "}
                      <a
                        href="https://ameyawdebrah.com/hitmakers-firstklaz-and-hitsound-team-up-for-summer-anthem-i-like-girls/"
                        target="blank"
                      >
                        AmeyawDebrah.
                      </a>
                    </span>
         </span>

In 2025, FirstKlaz released <span className="bio_link"><a href={getSongLink("Soyaiya")} target="_blank">Soyaiya</a></span>, a soulful and melodic single that further cemented his reputation as an artist who can balance emotional depth with musical accessibility.

On October 3, 2025, FirstKlaz released his EP <span className="bio_link"><a href={getSongLink("Dejavu")} target="_blank">Déjavu</a></span> under Iliya Entertainment Music, a seven-track project that fuses his artistic roots with refined production and storytelling. The EP blends kalangu and goje textures with hip-hop inflections and emotive songwriting, ranging from the assertive energy of <span className="bio_link"><a href={getSongLink("Alhaji")} target="_blank">Alhaji</a></span>, to the romantic heart of <span className="bio_link"><a href={getSongLink("Soyaiya")} target="_blank">Soyaiya</a></span>, and the unifying anthem <span className="bio_link"><a href={getSongLink("Gen-Z AreWazobia")} target="_blank">Gen-Z Arewazobia</a></span>. Déjavu invites listeners to journey with him into memory, identity, and reawakening.

Déjavu is an anthem for the voiceless for dreamers, hustlers, and everyday people pushing against the odds.

Déjà vu is that strange, powerful feeling of living something for the first time, yet sensing a deep familiarity. That’s exactly how this moment feels for me.

“I remember being a student, captivated by the harmonies of our school choir voices blending as one. I still hear echoes: the cooks humming in Hausa, the security men softly singing as they walked the grounds. Their voices, their presence… all of it felt like a song I had heard before, even if I was just experiencing it now. Those memories live within me. Now, as I bring Déjavu to life, it feels like I stand again in those moments like I’ve been here before. It is Déjà Vu.”

This project is for everyone who feels unheard, unseen, overlooked, those who pour themselves into their dreams every day, even when the world seems silent. This is your song.


      
         
      </div>
      <button onClick={handlePdfDownload}>Download EPK</button>
    </div>
  );
}
