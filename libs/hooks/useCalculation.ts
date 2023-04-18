import type { User } from 'component/types/user'
import type { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useCalculation = (router: NextRouter): number => {
  const [user, setUser] = useState<User>({
    name: '',
    phone: '',
    balance: 0,
    birthday: null,
  })

  const balanceInterval = (
    balance: number,
    start: number,
    finish: number
  ): boolean => balance >= start && balance <= finish

  const calculeFGTS = (user: User): number => {
    if (user.balance <= 500) {
      return user.balance * 0.5
    } else if (balanceInterval(user.balance, 501.0, 1000.0)) {
      return user.balance * 0.4 + 50
    } else if (balanceInterval(user.balance, 1001.0, 5000.0)) {
      return user.balance * 0.3 + 150
    } else if (balanceInterval(user.balance, 5001.0, 10000.0)) {
      return user.balance * 0.2 + 650
    } else if (balanceInterval(user.balance, 10001.0, 15000.0)) {
      return user.balance * 0.15 + 1150.0
    } else if (balanceInterval(user.balance, 15001.0, 20000.0)) {
      return user.balance * 0.1 + 1900.0
    } else return user.balance * 0.05 + 2900.0
  }

  useEffect(() => {
    console.log(router.query)
    setUser({
      name: String(router?.query?.name),
      phone: String(router?.query?.phone),
      balance: Number(router?.query?.balance),
      birthday: Date.parse(String(router?.query?.birthday)),
    })
  }, [router?.query])

  console.log(user)
  console.log(calculeFGTS(user))

  return Number(calculeFGTS(user))
}

export default useCalculation
