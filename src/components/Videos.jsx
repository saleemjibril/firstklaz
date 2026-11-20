import Slider from "./Slider";

const videos = [
  "https://www.youtube-nocookie.com/embed/yYL0TqP65HU?si=un0TTIpY45xEwQo5",
  "https://www.youtube-nocookie.com/embed/gUiIdM7rrY4?si=mpDlM-4kb9YXqXvY",
  "https://www.youtube-nocookie.com/embed/7BUKkUk-Tdg?si=OYwn60x_GxbHJPNc",
  "https://www.youtube-nocookie.com/embed/-WHUPDGxw_I?si=v4qAd2eVguigtdri",
  "https://www.youtube-nocookie.com/embed/RKFgn116iDs?si=ZQH7pGpgI1cqECsg",
  "https://www.youtube-nocookie.com/embed/9r1u5eH31n0?si=6ewbh-qmYsFP-mV4",
  "https://www.youtube-nocookie.com/embed/AsYJ3y0DT5I?si=82mQins_x1I3SNus",
  "https://www.youtube-nocookie.com/embed/vSF_B0S2iss?si=Y3XF09GrlffLuc7a",
  "https://www.youtube-nocookie.com/embed/YdARqW-HHLE?si=ai6INzaXm-4B0Iwl",
  "https://www.youtube-nocookie.com/embed/GyndgOsaKtk?si=cEcofGRetsfVznKB",
];

export default function Videos() {
  return (
    <div className="videos">
      <Slider className="video_slider" innerClassName="videos_inner">
        {videos.map((src, index) => (
          <div key={src} className="youtube_video_container">
            <iframe
              className="youtube_video"
              src={src}
              title={`Firstklaz video ${index + 1}`}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}
