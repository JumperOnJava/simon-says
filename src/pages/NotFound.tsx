import "./Page.css";
import PathError from "../components/PathError";

export default function Submit() {
  return (
    <div className="fullscreen-centered">
      <PathError>Page not found</PathError>
    </div>
  );
}
