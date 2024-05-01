import { createLazyFileRoute } from '@tanstack/react-router'
import Container from '../components/shared/Container'


export const Route = createLazyFileRoute('/')({
  component: Home,
})


function Home() {
  return (<Container>
    <div className='py-3'>
      <h1>Home </h1>
    </div>
  </Container>)
}