import { socialLinks } from "@/data/social";

export default function Social() {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {socialLinks.map((value) => (
        <li key={value.id}>
          <a
            href={value.url}
            target={value.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            className="social-link min-h-11 flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color"
          >
            <value.icon
              className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
              aria-hidden="true"
            />{" "}
            &nbsp;
            {value.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
