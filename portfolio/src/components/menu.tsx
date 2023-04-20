import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/myskill">My Skill</Link>
        </li>
        <li>
          <Link href="/myproject">My Project</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
