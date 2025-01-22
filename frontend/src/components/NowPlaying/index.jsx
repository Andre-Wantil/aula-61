import ProgressBar from "../ProgressBar";
import PlayerController from "../PlayerController";
import lentes from "../../assets/lentes.jpg";

export default function NowPlaying({ showProgressBar }) {
  return (
    <section
      className={`${
        !showProgressBar &&
        "fixed bottom-0 left-0 w-full flex flex-row items-center space-x-4 justify-between mt-6 p-4 bg-glass-light shadow-custom-glass backdrop-blur-md rounded-custom-glass"
      }`}
    >
      <div
        className={`${
          !showProgressBar && "flex flex-row items-center space-x-4"
        }`}
      >
        <img
          className={`${
            showProgressBar ? "rounded-3xl w-full mb-4" : "rounded-2xl w-16"
          }`}
          src={lentes}
          alt="Music icon"
        />
        <div>
          <h2
            className={`font-bold ${showProgressBar ? "text-xl" : "text-base"}`}
          >
            Memórias
          </h2>
          <h3 className={`${showProgressBar ? "text-lg" : "text-sm"}`}>
            Yun Li, Biffe, Hakuro, Liwan
          </h3>
        </div>
      </div>
      {showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={showProgressBar} />
    </section>
  );
}
