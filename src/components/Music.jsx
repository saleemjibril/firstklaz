

export default function Music() {
  const songs = [
    {
      id: 1,
      name: "Lili",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_22.00.38_noclef.jpg",
      link: "https://open.spotify.com/track/6EPx2QMxeczaLRcCT5X2N7?si=18dfbce5384346b4",
      className: "slider_item"
    },
    {
      id: 2,
      name: "Maria",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_22.00.38_noclef.jpg",
      link: "https://open.spotify.com/track/1tGjxyOhEVdHp9TecN9eNs?si=48b52e329dfe43df",
      className: "slider_item"
    },
    {
      id: 3,
      name: "Soyaiya",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_22.00.38_noclef.jpg",
      link: "https://open.spotify.com/track/0bUIHpzmoZ4rbyGSkZaKxM?si=8255ed6e8e6845e8",
      className: "slider_item"
    },
    {
      id: 4,
      name: "Aure",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_22.00.38_noclef.jpg",
      link: "https://open.spotify.com/track/1scrp4arfiqjuW8qtp6DEz?si=5b836d7e9c994538",
      className: "slider_item"
    },
    {
      id: 5,
      name: "Umi",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_22.00.38_noclef.jpg",
      link: "https://open.spotify.com/track/2cw1w0O1K75vT4034UprlD?si=ff7c58b5b7d7453d",
      className: "slider_item"
    },
    {
      id: 6,
      name: "Gen-Z AreWazobia",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080580/Screenshot_2025-10-21_at_21.59.47_ap7ump.jpg",
      link: "https://open.spotify.com/track/7DmIZw74TbpnuTSmi7i7Jd?si=abd4b152ca1f4a60",
      className: "slider_item"
    },
    {
      id: 7,
      name: "Alhaji",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080581/Screenshot_2025-10-21_at_21.59.27_yxpg8v.jpg",
      link: "https://open.spotify.com/track/1zA5rG1hcPSLmfZhU4XJ0e?si=30dbf03b50474657",
      className: "slider_item"
    },
    {
      id: 8,
      name: "BamBam",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080581/Screenshot_2025-10-21_at_21.58.58_wvjgcn.jpg",
      link: "https://open.spotify.com/album/0cMy1oQXPtmqHb3OiwshNF?si=rgCCxIihTlSkHdZAJgY_-A",
      className: "slider_item"
    },
    {
      id: 9,
      name: "Gen-Z Arewa",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080717/genz-arewaa_zdytae.jpg",
      link: "https://open.spotify.com/track/1IWBeLzkyQ8ijoAD8BjIiU?si=44dba142aa004fe7",
      className: "slider_item"
    },
    {
      id: 10,
      name: "Gen-Z Faaji",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080717/genz-faaji_zo1cph.jpg",
      link: "https://open.spotify.com/track/6ML4o3KWB24d8R7RU6fVkl?si=cfd04121cc7148da",
      className: "slider_item"
    },
    {
      id: 11,
      name: "Gen-Z Fuji II",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080715/genzfuji_ajsqpq.jpg",
      link: "https://open.spotify.com/track/3V7p0TjIBNai9YpG6wN7VF?si=1af0b73794ef4ffc",
      className: "slider_item"
    },
    {
      id: 12,
      name: "Gen-Z Fuji",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080715/genzfuji_ajsqpq.jpg",
      link: "https://open.spotify.com/track/513bT5hsTWaLwIiwktuAPG?si=03a67a1cd79a4f52",
      className: "slider_item"
    },
    {
      id: 13,
      name: "Ogini",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080718/Ogini_n5fzyh.jpg",
      link: "https://open.spotify.com/track/4rp9m6fnDUvl5eGXuSPkfI?si=61b0157e700a4b8d",
      className: "slider_item"
    },
    {
      id: 14,
      name: "I Like Girls",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080720/234efw32232_ug0biv.jpg",
      link: "https://open.spotify.com/track/4kbBGiJoxDzBOez59KMKPL?si=7be9d36658004719",
      className: "slider_item"
    },
    {
      id: 15,
      name: "Só",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080720/34wefcd_j4prgp.jpg",
      link: "https://music.apple.com/ng/album/so/1685998559?i=1685998560",
      className: ""
    },
    {
      id: 16,
      name: "Helicopter Boy(Freestyle)",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080719/ednvje65453_xxvli5.jpg",
      link: "https://open.spotify.com/track/33GMrrUaLz5tAgsndhyYJm?si=5c322a55b58941a7",
      className: ""
    },
    {
      id: 17,
      name: "I No Wan Go School",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080720/2e3frevdsadX_o92uqt.jpg",
      link: "https://music.apple.com/ng/album/i-no-wan-go-school/1641273689?i=1641273692",
      className: ""
    },
    {
      id: 18,
      name: "Sliders",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080716/frdsvaf_sp9gj6.jpg",
      link: "https://open.spotify.com/track/0F7LG63o9ruNfMsyy95lk6?si=0fc03f145ad944cc",
      className: ""
    },
    {
      id: 19,
      name: "Sacrifice",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080717/sacrifice_art_smwq3z.jpg",
      link: "https://open.spotify.com/track/2ZHiFd6HXyPNJsodMpEbHV?si=e527e9a62f024426",
      className: ""
    },
    {
      id: 20,
      name: "Olomi",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080714/olomi_m3e1v8.jpg",
      link: "https://open.spotify.com/track/4vIhJaS3qjJVBVFF0Hz4dg?si=c94e79c62f504858",
      className: ""
    },
    {
      id: 21,
      name: "Show Them",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080720/cdac3223_rrvuzh.jpg",
      link: "https://open.spotify.com/track/75FjivAij6BkqYE7CGM0D8?si=01e7547d1a934f0f",
      className: ""
    },
    {
      id: 22,
      name: "Gbese",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080718/cdsazvx_32_ppdff1.jpg",
      link: "https://open.spotify.com/track/4wR8VCRFN6MGkYDzKneuLB?si=68529ca1ab78436a",
      className: ""
    },
    {
      id: 23,
      name: "JO (Freestyle)",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080720/sdaCSAc_h4aceu.jpg",
      link: "https://open.spotify.com/track/3KFg3Uz6n7B09jpRcQ6MUB?si=84134b31d0724a2e",
      className: ""
    },
    {
      id: 24,
      name: "Tonight",
      image: "https://res.cloudinary.com/thewebplug/image/upload/v1761080719/edsazcdas_buwmoy.jpg",
      link: "https://open.spotify.com/track/4LHgluF02FqumshmgPop4a?si=722807340c624afc",
      className: ""
    }
  ];

  return(
    <div className="music" id="music">
      <div className="music_slider">
        <svg
          className="pointer music_prev_btn prev_btn"
          fill="#ffffff"
          viewBox="-28.75 0 156.07 156.07"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Layer_2" data-name="Layer 2">
              {" "}
              <g id="Layer_1-2" data-name="Layer 1">
                {" "}
                <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="music_inner">
          {songs.map((song) => (
            <a
              key={song.id}
              href={song.link}
              target="_blank"
              className={song.className}
            >
              <img 
                className={song.className ? "music_artwork" : ""} 
                src={song.image} 
                alt={song.name} 
              />
              <div className="music_gif">
                {/* <img src={song.gif} alt="" /> */}
              </div>
              <div className="music_name">{song.name}</div>
              <button className="music_button">Listen now</button>
            </a>
          ))}
        </div>

      <svg
        fill="#ffffff"
        viewBox="-28.75 0 156.07 156.07"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        className="pointer music_next_btn next_btn"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Layer_2" data-name="Layer 2">
            {" "}
            <g id="Layer_1-2" data-name="Layer 1">
              {" "}
              <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  </div>)
}
