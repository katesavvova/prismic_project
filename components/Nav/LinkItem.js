import Link from 'next/link'

export const LinkItem = ({ link, name, isActive }) => {

  return(
    <li className={`nav__link ${isActive ? "active-link" : ""}`}>
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </li>
  )
}
