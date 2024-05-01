import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/services')({
  component: Services,
})

function Services() {
  return (<div>Services</div>)
}