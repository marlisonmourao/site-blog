import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: AvatarSize
}

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
}

export function AvatarImage({ ...props }: AvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-blue-200 border-[1px]',
        {
          [avatarSize[props.size ?? 'xs']]: props.size,
        }
      )}
    >
      <Image {...props} width={40} height={40} />
    </div>
  )
}
