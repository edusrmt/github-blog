import { formatDistanceToNowStrict } from 'date-fns'

export function timeFromNow(timestamp: string) {
  return formatDistanceToNowStrict(new Date(timestamp), {
    addSuffix: true,
  })
}
