import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <Container>
      <Image
        src="/logo-rick.png"
        width={150}
        quality={100}
        height={50}
        alt="Rick and morty logo"
      />

      <ul>
        <li>
          <Link href="/">Characters</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </Container>
  );
};
