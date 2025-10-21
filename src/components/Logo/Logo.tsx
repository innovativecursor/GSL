import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <img
      alt="Payload Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('xl:w-full md:w-48 md:h-14 h-12 w-36', className)}
      src="/logo.png"
    />
  )
}
