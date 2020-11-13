import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { LinkItem } from './LinkItem'

const links = [
  {
    name: 'Profile',
    link: '/profile',
  },
  {
    name: 'Jobs',
    link: '/job',
  },
  {
    name: 'Team',
    link: '/team',
  },
  {
    name: 'FAQ',
    link: '/faq',
  }
]

export const Navigation = () => {
  const [tab, setTab] = useState(null)
  const router = useRouter();
  
  useEffect(() => {
    const pathParts = router.pathname.split('/');
    console.log(pathParts)
    setTab(pathParts[1]);
  }, [])

  console.log(tab)
  return(
    <nav>
      <ul className="nav__list">
        {links.map(item => (
          <LinkItem 
            key={item.name}
            {...item}
            isActive={item.link === `/${tab}`}
          />
        ))}
      </ul>
    </nav>
  )
}
