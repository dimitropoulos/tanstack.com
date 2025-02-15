import { Outlet } from '@remix-run/react'
import { json, LoaderArgs, MetaFunction, redirect } from '@remix-run/node'
import { seo } from '~/utils/seo'

export let meta: MetaFunction = (meta) => {
  return seo({
    title: 'TanStack Query | React Query, Solid Query, Svelte Query, Vue Query',
    description:
      'Powerful asynchronous state management, server-state utilities and  data fetching for TS/JS, React, Solid, Svelte and Vue',
    image: 'https://github.com/tanstack/query/raw/beta/media/repo-header.png',
  })
}

export const loader = async (context: LoaderArgs) => {
  if (!context.request.url.includes('/query/v')) {
    return redirect(`${new URL(context.request.url).origin}/query/v4`)
  }

  return new Response('OK')
}

export default function RouteReactTable() {
  return <Outlet />
}
