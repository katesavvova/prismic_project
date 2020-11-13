import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function() {
  const router = useRouter();
  useEffect(() => {router.push('/profile')}, [])

  return (
    <div>
    </div>
  )
}
