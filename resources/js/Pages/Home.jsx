import { Link } from '@inertiajs/inertia-react'
import Layout from '../components/Layout/Layout'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../reducers/counterSlice'

export default function Home() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="h-10 w-full bg-slate-300 text-[25px]"> Home Page</div>
        <Link href="/about" className="underline">
          About
        </Link>
        <div className='mt-52'>
          Redux is working! You can increment or decrement the count below.
        </div>
        <div className="py-4 flex gap-2">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
        <div>Count: {count}</div>
      </div>
    </Layout>
  )
}
