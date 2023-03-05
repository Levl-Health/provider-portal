import { PrismaClient } from '@prisma/client'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const IndexPage = () => {
  return (
    <>
      <MetaTags title="Index" description="Index page" />

      <h1>IndexPage</h1>
      <p>
        Find me in <code>./web/src/pages/IndexPage/IndexPage.js</code>
      </p>
      <p>
        My default route is named <code>index</code>, link to me with `
        <Link to={routes.index()}>Index</Link>`
      </p>
    </>
  )
}

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default IndexPage
