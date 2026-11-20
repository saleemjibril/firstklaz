import Slider from "./Slider";

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

  return (
    <div className="music">
      <Slider className="music_slider" innerClassName="music_inner">
        {songs.map((song) => (
          <a
            key={song.id}
            href={song.link}
            target="_blank"
            rel="noreferrer"
            className={song.className}
          >
            <img
              className={song.className ? "music_artwork" : ""}
              src={song.image}
              alt={song.name}
            />
            <div className="music_name">{song.name}</div>
            <button className="music_button" tabIndex={-1}>
              Listen now
            </button>
          </a>
        ))}
      </Slider>
    </div>
  );
}
