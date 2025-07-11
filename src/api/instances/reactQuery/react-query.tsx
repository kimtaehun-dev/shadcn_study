"use client"

import { ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
//개발환경에서만 사용
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type QueryProviderType={
  children : ReactNode
}

export default function ReactQueryProvider({children}:QueryProviderType){
  const [queryClient] = useState(()=>new QueryClient())
  return(
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}