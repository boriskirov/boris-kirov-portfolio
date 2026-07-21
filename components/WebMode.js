import Link from "next/link";
import boris from "../public/boris.json";

export default function WebMode() {
  return (
    <div>
      <h1 className="heading-2xl">
        {boris.firstName} {boris.familyName}
      </h1>
      <p>
        {boris.profession} •{" "}
        <Link
          href="https://boriskirov.photos"
          className="external"
          target="_blank"
        >
          Photographer
        </Link>{" "}
        • Visual Storyteller • Technologist • Speaker <br />I live in Amsterdam,
        and currently getting things done at{" "}
        <Link href="https://elastic.co" className="external" target="_blank">
          {boris.experience[0].company}
        </Link>
        . Before that I worked at{" "}
        <Link href="https://miro.com" className="external" target="_blank">
          {boris.experience[3].company}
        </Link>
        ,{" "}
        <Link href="https://info.nl" className="external" target="_blank">
          {boris.experience[5].company}
        </Link>
        , and {boris.experience[7].company}
        .
        <br />
        <br />
        <i>* Always remotely.</i>
      </p>
    </div>
  );
}
