'use client'
import Header from '@/components/jsx-components/partials/Header'
import ProductFiltersTabs from '@/components/jsx-components/ui/ProductFiltersTabs'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <Header />
      <ProductFiltersTabs />
    </div>
  )
}