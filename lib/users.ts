// import prisma from '@/app/_components/lib/prisma'
import { User } from '@prisma/client'
import db from './db'

export async function createUser(data: User) {
  try {
    const user = await db.user.create({ data })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getUserById({
  id,
  clerkUserId
}: {
  id?: string
  clerkUserId?: string
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error('id or clerkUserId is required')
    }

    const query = id ? { id } : { clerkUserId }

    const user = await db.user.findUnique({ where: query })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function UpdateUser(id: string, data: Partial<User>) {
  try {
    const user = await db.user.update({
      where: { clerkUserId: id },
      data
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export function combineName(user: User) {
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`
}