import { useSelector } from "react-redux";
import "../styles/Icon.css";
import { store, type RootState } from "../store/store";
import { setSounds, setTheme } from "../store/siteSettingsSlice";

export function SiteSettings() {
  const size = 40;

  const { sounds, theme } = useSelector(
    (state: RootState) => state.siteSettings
  );

  return (
    <div className="flex gap-6 m-4">
      <button
        className="hover:cursor-pointer select-none"
        onClick={() => {
          store.dispatch(setTheme(theme == "light" ? "dark" : "light"));
        }}
      >
        <img
          src={`/mode-${theme}.svg`}
          className="logo-image"
          width={size}
          height={size}
        />
      </button>
      <button
        className="hover:cursor-pointer select-none"
         onClick={() => {
          store.dispatch(setSounds(!sounds));
        }}
      >
        <img
          src={`/sound-${sounds ? "on" : "off"}.svg`}
          className="logo-image"
          width={size}
          height={size}
        />
      </button>
    </div>
  );
}
