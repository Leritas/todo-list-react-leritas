import { IconVk } from "src/shared/ui/IconVk";
import { IconTelegram } from "src/shared/ui/IconTelegram";
import { IconGithub } from "src/shared/ui/IconGithub";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <IconVk />
          <a href="https://vk.com/leritas">Вконтакте</a>
        </li>
        <li>
          <IconTelegram />
          <a href="https://t.me/leritas">Telegram</a>
        </li>
        <li>
          <IconGithub />
          <a href="https://github.com/Leritas">GitHub</a>
        </li>
      </ul>
    </footer>
  );
}
