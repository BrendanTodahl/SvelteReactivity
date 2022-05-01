import { useRouter } from 'next/router'

function ActiveLink({ href, key, text }) {
  const router = useRouter()
  const className = router.asPath === href ? 'active' : ''

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} key={key} onClick={handleClick} className={className}>
      {text}
    </a>
  )
}

export default ActiveLink